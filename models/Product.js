import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    descp: String,
    brandId: String
});

export default mongoose.model('Product', ProductSchema);