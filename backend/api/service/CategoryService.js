// import Category from "../models/Category";

// const insertCatgory=async(req,res,next)=>{
//     console.log("Request body ::",req.body)
//   const category = new Category(req.body);

//   try {
//     const saveCategory = await category.save();
//     console.log("saveCategory ",saveCategory)
//     res.status(200).json(saveCategory);
//   } catch (error) {
//     next(error);
//   }
// }

// export default CategoryService;