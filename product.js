var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  name:{type: String, required: true},
  description: {type: String, required: true},
  price: {type: String, required: true},
  rating: {type: Number,required: true, min:1, max:5}
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
