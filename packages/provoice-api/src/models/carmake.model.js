import mongo from "../config/persistence/mongoose";

const { Schema } = mongo.Schema;
const MakeSchema = new Schema({
  make: { type: String, required: true }
});

const carMake = mongo.model("Make", MakeSchema);

export default carMake;
