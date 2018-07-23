import mongo from "../persistence/mongoose";

const { Schema } = mongo.Schema;

const CarSchema = new mongo.Schema({
  carDealerId: { type: String, required: true },
  carModelId: { type: String, required: true },
  yearAt: { type: Number, required: true },
});

const Car = mongo.model("Car", CarSchema);

export default Car;
