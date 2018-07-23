import mongo from "../config/persistence/mongoose";

const { Schema } = mongo.Schema;

const ModelSchema = new Schema({
  makeId: { type: String, required: true },
  model: { type: String, required: true }
});

const carModel = mongo.model("Model", ModelSchema);

export default carModel;
