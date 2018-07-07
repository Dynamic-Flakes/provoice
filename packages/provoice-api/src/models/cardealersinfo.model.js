import mongo from "../config/mongoose";

const CarDealerInfoSchema = new mongo.Schema({
  carDealerInfo: {
    name: { type: String },
    phoneNo: { type: Number, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    address: { type: String, required: true }
  },
  description: String,
  created: { type: Date, default: Date.now },
  reported: { type: Date, default: Date.now }
});

const CarDealerInfo = mongo.model("CarDealerInfo", CarDealerInfoSchema);

export default CarDealerInfo;
