import Dealer from "../models/cardealersinfo.model";

module.exports = {
  getAllCarDealers: async (req, res, next) => {
    const dealers = await Dealer.find({});
    res.status(200).json(dealers);
  },

  dealerInfo: async (req, res, next) => {
    const newDealer = new Dealer(req.body);
    const dealer = await newDealer.save();
    res.status(201).json(dealer);
  },

  getDealerById: async (req, res, next) => {
    const { dealerId } = req.params;
    const dealer = await Dealer.findById(dealerId);
    res.status(200).json(dealer);
  },
  deleteDealerById: async (req, res, next) => {
    const { dealerId } = req.params;
    const result = await Dealer.findOneAndRemove(dealerId);
    res.status(200).json(result);
  },
  updateDealer: async (req, res, next) => {
    const { dealerId } = req.params;
    const newDealer = req.body;
    const result = await Dealer.findByIdAndUpdate(dealerId, newDealer);
    res.status(200).json(result);
  },

  getUserCars: async (req, res, next) => {
		const { userId } = req.params;
		const user = await User.findById(userId).populate('cars');
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
