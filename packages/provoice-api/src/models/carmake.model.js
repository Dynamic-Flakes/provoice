import mongo from "../config/mongoose";

const MakeSchema = new mongo.Schema({
  make: { type: String, required: true }
});

const carMake = mongo.model("Make", MakeSchema);

export default carMake;
