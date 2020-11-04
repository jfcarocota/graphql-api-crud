import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    name: String
});

export default mongoose.model('Brand', BrandSchema);