const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    product_id:Number,
    img:String,
    decription:String,
    price:Number,
    brands:Array,
    productCategory_id:Number,
    occasion_id:Number,
    size_id:Number,
    discount_id:Number,
})

mongoose.model('product',productSchema, 'product');
module.exports = mongoose.model('product')

