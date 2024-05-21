const express = require("express")
const router = express.Router()
const productController=require("../controllers/productController")

router.get("/products", productController.getAllProducts)
router.post("/products", productController.postProducts)
router.get("/products/:id", productController.getProductById)
router.delete("/products/:id", productController.deleteProductById)
router.patch("/products/:id", productController.patchProductById)
router.put("/products/:id", productController.putProductById)






module.exports = router