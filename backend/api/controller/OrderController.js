import Order from "../models/Order.js";

export const placeOrder = async (req, res, next) => {
  
  const order = new Order(req.body);

  try {
    const orderSaved = await order.save();
    console.log("orderSaved ", orderSaved);
    res.status(200).json(orderSaved);
  } catch (error) {
    next(error);
  }
  
};
