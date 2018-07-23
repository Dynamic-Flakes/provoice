import Dealer from "../models/cardealersinfo.model";

module.exports = {
  // fetch all dealer/
  getAllCarDealers: async (req, res, next) => {
    const dealers = await Dealer.find({});
    if (!dealers) res.status(404).json({ error: "users not found" });
    res.status(200).json(dealers);
  },

  // Create a new dealer
  dealerInfo: async (req, res, next) => {
    const newDealer = new Dealer(req.body);
    const dealer = await newDealer.save();
    if (newDealer)
      res.json({
        status: "New Dealer successfully added!",
        newDealer: dealer
      });
  },
  // Read a dealer by id
  getDealerById: async (req, res, next) => {
    const { dealerId } = req.params.id;
    const dealer = await Dealer.findById(dealerId);
    if (!dealer) res.status(404).json({ error: "dealer not found" });
    res.status(200).json(dealer);
  },
  // delete a dealer by id
  deleteDealerById: async (req, res, next) => {
    const { dealerId } = req.params.id;
    const result = await Dealer.findByIdAndRemove(dealerId);
    res.status(200).json(result);
  },
  // update a dealer
  updateDealer: async (req, res, next) => {
    const { dealerId } = req.params.id;
    const { newDealer } = req.body;
    const result = await Dealer.findByIdAndUpdate(
      dealerId,
      { $set: newDealer },
      { $upsert: true, new: true }
    );
    res.status(200).json(result);
  },

  getUserCars: async (req, res, next) => {
    const { userId } = req.params;
    const user = await Dealer.findById(userId).populate("cars");
    res.status(200).json(user.cars);
  },

  newUserCar: async (req, res, next) => {
    const { userId } = req.params;
    const newCar = new Car(req.body);
    const user = await User.findById(userId);
    newCar.seller = user;
    await newCar.save();
    user.cars.push(newCar);
    await user.save();
    res.status(201).json(newCar);
  }
};
