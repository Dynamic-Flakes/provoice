import mongo from "../config/mongoose";

const CarSchema = new mongo.Schema({
  carDealerId: { type: String, required: true },
  carModelId: { type: String, required: true }
});

const Car = mongo.model("Car", CarSchema);

export default Car;
