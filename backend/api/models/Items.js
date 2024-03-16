import mongoose from "mongoose";

export const Item = new mongoose.Schema({
  item_name: {
    required: true,
    type: String,
  },
  half_price: {
    type: Number,
    required: true,
  },
  full_price: {
    type: Number,
    required: true,
  },
  family_price: {
    type: Number,
    required: false,
  },
});

// export default mongoose.model("Item", Item)