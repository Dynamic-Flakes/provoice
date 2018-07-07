import mongo from "../persistence/mongoose";

const { Schema } = mongo.Schema;

const CarSchema = new mongo.Schema({
  carDealerId: { type: String, required: true },
  carModelId: { type: String, required: true },
  year: { type: Number, required: true },
  seller: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
});

const Car = mongo.model("Car", CarSchema);

export default Car;
