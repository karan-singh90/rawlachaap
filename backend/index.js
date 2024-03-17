import cookieParser from "cookie-parser";
import express from "express"
import cors from "cors";
import dotenv from "dotenv"
import mongoose from "mongoose";
import categoryRoute from "./api/routes/categoryRoute.js";
import orderRoute from "./api/routes/orderRoute.js";

const app =express();
dotenv.config();
const port = process.env.PORT || 5000;

const connect= async()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to DB")
    
} catch (error) {
   throw error 
}
};

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

connection.on("disconnected",()=>{
    console.log("Disconnected to DB");
})



app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/category",categoryRoute)
app.use("/api/order",orderRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  

app.listen(port,()=>{
    connect();
    console.log("Connected to backend.");
})