import { Schema, model } from "mongoose";

const ItemSchema = new Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  phoneNumber: { type: String, required: true },
});

// Item is a Mongoose model that represents the Item collection in the database.

const Item = model("Item", ItemSchema);
export default Item;
