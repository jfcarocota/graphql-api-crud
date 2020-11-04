import graphql from 'graphql';
import database from '../database.js';
import ProductType from './ProductType.js';
import BrandType from './BrandType.js';
import Product from '../models/Product.js';
import Brand from '../models/Brand.js';

const {products, brands} = database;
const {GraphQLObjectType, GraphQLID, GraphQLList}  = graphql;


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        product: {//Get product by id
            type: ProductType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                
                return Product.findById(args.id);
            }
        },
        products: { //Get all products
            type: new GraphQLList(ProductType),
            resolve(parent, args){
                return Product.find();
            }
        },
        brand: { //Get brind by id
            type: BrandType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Brand.find(brand => brand.id === args.id);
            }
        },
        brands: { //get all brands
            type: new GraphQLList(BrandType),
            resolve(parent, args){
                return Brand.find();
            }
        },
        getProductsbyBrand: {
            type: new GraphQLList(ProductType),
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Product.findById(args.id);
            }
        }
    }
});

export default RootQuery;