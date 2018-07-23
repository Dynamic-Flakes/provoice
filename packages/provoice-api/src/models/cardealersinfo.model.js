// import mongoosePaginate from "mongoose-paginate";

import mongo from "../config/persistence/mongoose";

const  Schema  = mongo.Schema;

const CarDealerInfoSchema = new Schema({
  carDealerInfo: {
    name: { type: String },
    phoneNo: { type: Number, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    address: { type: String, required: true }
  },
  description: String,
  createdAt: { type: Date, default: Date.now },
  reported: { type: Date, default: Date.now }
});

// CarDealerInfoSchema.plugin(mongoosePaginate);
const CarDealerInfo = mongo.model("CarDealerInfo", CarDealerInfoSchema);

export default CarDealerInfo;
