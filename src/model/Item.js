import { Schema, model } from "mongoose";

const ItemSchema = new Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  image: { type: String, required: false },
});
const Item = model("Item", ItemSchema);
export default Item;
