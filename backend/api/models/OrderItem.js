import mongoose from "mongoose";

export const OrderItem = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  qty: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  itemCost: {
    type: Number,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("OrderItem", OrderItem);
