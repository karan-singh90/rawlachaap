import Category from "../models/Category.js";

export const createCategory = async (req, res, next) => {
  console.log("Request body ::", req.body);
  const category = new Category(req.body);

  try {
    const saveCategory = await category.save();
    console.log("saveCategory ", saveCategory);
    res.status(200).json(saveCategory);
  } catch (error) {
    next(error);
  }
};

export const getCategoryById = async (req, res, next) => {
  try {
    console.log("Id ::",req.params)
    const obj =await Category.findById(req.params.id);
    res.status(200).json(obj);
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
    try {
      const obj =await Category.find();
      res.status(200).json(obj);
    } catch (error) {
      next(error);
    }
  };

  export const deleteCategoryById = async (req, res, next) => {
    try {
      console.log("Id ::",req.params)
      const obj =await Category.findByIdAndDelete(req.params.id);
      res.status(200).json(obj);
    } catch (error) {
      next(error);
    }
  };

  export const updateCategoryById = async (req, res, next) => {
    try {
      const updatedCategory =await Category.findByIdAndUpdate(req.params.id,
        { $set: req.body },
        { new: true });
      res.status(200).json(updatedCategory);
    } catch (error) {
      next(error);
    }
  };



