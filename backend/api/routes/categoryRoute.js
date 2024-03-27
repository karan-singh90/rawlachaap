import express from "express";
import {
  createCategory,
  getCategoryById,
  getAllCategories,
  deleteCategoryById,
  updateCategoryById,
  deleteItem,
  updateItem,
} from "../controller/CategoryController.js";

const categoryRoute = express.Router();

categoryRoute.post("/", createCategory);
categoryRoute.get("/:id", getCategoryById);
categoryRoute.get("/", getAllCategories);
categoryRoute.delete("/:id", deleteCategoryById);
categoryRoute.put("/:id", updateCategoryById);
categoryRoute.delete("/:parentId/item/:childId",deleteItem)
categoryRoute.put("/:parentId/item/:childId",updateItem)


// categoryRoute.put("/:id",updateCategory)
// categoryRoute.delete("/:id",deleteCategory)

export default categoryRoute;
