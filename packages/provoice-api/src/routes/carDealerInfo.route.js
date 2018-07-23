const express = require("express");
const router = require("express-promise-router")();

const { validateBody, schemas } = require("../helpers/routeHelpers");

const carDealerInfoController = require("../controllers/carDealerInfoController");

router
  .route("/")
  .get(carDealerInfoController.getAllCarDealers)
  .post(validateBody(schemas.authSchema), carDealerInfoController.dealerInfo);

router
  .route("/:car_id")
  .get(carDealerInfoController.getDealerById)
  .delete(carDealerInfoController.deleteDealerById)
  .put(carDealerInfoController.updateDealer);

// router
//   .route("/:userId/cars")
//   .get(carDealerInfoController.getUserCars)
//   .post(carDealerInfoController.newUserCar);
// // .get()

module.exports = router;
