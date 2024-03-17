import mongoose from "mongoose";
import {OrderCategory} from "./OrderCategory.js";

const Order = new mongoose.Schema({
  customerName: {
    required: true,
    type: String,
  },
  mobileNumber: {
    required: true,
    type: Number,
  },
  tableNo: {
    required: true,
    type: String,
  },
  timeStamp: {
    required: true,
    type: String,
    default: new Date().toLocaleString(),
  },
  category: {
    required: true,
    type: [OrderCategory],
  },
  totalOrderCost: {
    require: true,
    type: Number,
  },
});

export default mongoose.model("Order", Order);
