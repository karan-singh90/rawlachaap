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
    console.log("Id ::", req.params);
    const obj = await Category.findById(req.params.id);
    res.status(200).json(obj);
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const obj = await Category.find();
    res.status(200).json(obj);
  } catch (error) {
    next(error);
  }
};

export const deleteCategoryById = async (req, res, next) => {
  try {
    console.log("Id ::", req.params);
    const obj = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json(obj);
  } catch (error) {
    next(error);
  }
};

export const updateCategoryById = async (req, res, next) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    next(error);
  }
};

export const deleteItem = async (req, res, next) => {
  try {
    const parentId = req.params.parentId;
    console.log("parentId ::", req.params.parentId);

    const childId = req.params.childId;
    console.log("childId ::", req.params.childId);

    const updatedDocument = await Category.findByIdAndUpdate(
      parentId,
      {
        $pull: { items: { _id: childId } },
      },
      { new: true }
    );

    if (!updatedDocument) {
      console.log("Category document not found");
      return;
    }

    console.log("Updated document:", updatedDocument);
    res.status(200).json(updatedDocument);
  } catch (error) {
    next(error);
  }
};

export const updateItem = async (req, res, next) => {
  try {
    const parentId = req.params.parentId;
    console.log("parentId ::", req.params.parentId);

    const childId = req.params.childId;
    console.log("childId ::", req.params.childId);

    const updatedData = req.body.items[0];
    if (updatedData.hasOwnProperty("_id")) {
      delete updatedData["_id"];
    }

    const updatedDocument = await Category.findOneAndUpdate(
      { _id: parentId, "items._id": childId },
      { $set: { "items.$": updatedData } },
      { new: true }
    );

    if (!updatedDocument) {
      console.log("items document not found");
      return;
    }

    console.log("Updated document:", updatedDocument);
    res.status(200).json(updatedDocument);
  } catch (error) {
    next(error);
  }
};
