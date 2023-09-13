const mongoose = require('mongoose');
const {Schema} = mongoose;

//Schema

const productSchema = new Schema({
    id:Number,
    title: String,
    description:String,
    price:Number,
    thumbnail:String,
    rating:Number
})

exports.Product = mongoose.model('Product',productSchema);