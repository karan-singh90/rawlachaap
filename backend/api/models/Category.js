import mongoose from "mongoose";
import {Item} from "./Items.js";

const Category=new mongoose.Schema({
    category_name:{
        required: true,
        type:String,
        unique: true,
    },

    items:{
        required:true,
        type:[Item]
    }
})


export default mongoose.model("Category", Category)