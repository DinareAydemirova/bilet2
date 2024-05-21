const Product = require("./../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error)
  }
};

const postProducts = async (req, res) => {
    try {
      const obj=req.body
      const newProduct= await Product(obj)
      newProduct.save()
      res.status(201).send(newProduct);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const getProductById = async (req, res) => {
    try {
      const product=await Product.findById(req.params.id)
      if(!product){
        res.status(404).send("user not found");
      }
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send(error)
    }
  };

  
  const deleteProductById = async (req, res) => {
    try {
      const user=await Product.findOneAndDelete(req.params.id)
      if(!user){
        res.status(404).send("user not found");
      }
      res.status(200).send(user);
    } catch (error) {
        
      res.status(500).send(error)
    }
  };

  const patchProductById = async (req, res) => {
    try {
      const user=await Product.findByIdAndUpdate(req.params.id, req.body)
      if(!user){
        res.status(404).send("user not found");
      }
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error)
    }
  };

  const putProductById = async (req, res) => {
    try {
      const user=await Product.findOneAndReplace({_id:req.params.id}, req.body)
      if(!user){
        res.status(404).send("user not found");
      }
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send(error)
    }
  };


module.exports = { getAllProducts, postProducts, getProductById, deleteProductById,patchProductById, putProductById };
