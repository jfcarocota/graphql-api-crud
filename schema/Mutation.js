import graphql from 'graphql';
import ProductType from './ProductType.js';
import Product from '../models/Product.js';
import Brand from '../models/Brand.js';
import BrandType from './BrandType.js';

const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat}  = graphql;


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addProduct: {
            type: ProductType,
            args: {
                name: {type: GraphQLString},
                price: {type: GraphQLFloat},
                descp: {type: GraphQLString},
                brandId: {type: GraphQLID}
            },
            resolve(parent, args){
                let product = new Product({
                    name: args.name,
                    price: args.price,
                    descp: args.descp,
                    brandId: args.brandId
                });

                return product.save();
            }
        },
        editProduct:{
            type: ProductType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLString},
                price: {type: GraphQLFloat},
                descp: {type: GraphQLString},
                brandId: {type: GraphQLID}
            },
            resolve(parent, args){
                return Product.findByIdAndUpdate(args.id, args);
            }
        },
        deleteProduct: {
            type: ProductType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){

                return Product.findByIdAndDelete(args.id)
            }
        },
        addBrand: {
            type: BrandType,
            args: {
                name: {type: GraphQLString}
            },
            resolve(parent, args){

                let brand = new Brand({
                    name: args.name
                })

                return brand.save();
            }
        }
    }
});

export default Mutation;