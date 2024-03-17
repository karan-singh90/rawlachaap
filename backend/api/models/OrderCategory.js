import mongoose from "mongoose";
import {OrderItem} from "./OrderItem.js";

export const OrderCategory = new mongoose.Schema({
  category_name: {
    required: true,
    type: String,
  },
  items: {
    required: true,
    type: [OrderItem],
  },
});

export default mongoose.model("OrderCategory", OrderCategory);
