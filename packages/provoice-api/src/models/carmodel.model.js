import mongo from "../config/mongoose";

const ModelSchema = new mongo.Schema({
  makeId: { type: String, required: true },
  model: { type: String, required: true }
});

const carModel = mongo.model("Model", ModelSchema);

export default carModel;
