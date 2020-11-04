import graphql from 'graphql';
import Brand from '../models/Brand.js';
import BrandType from './BrandType.js';


const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLFloat}  = graphql;


const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        price: {type: GraphQLFloat},
        descp: {type: GraphQLString},
        brand: {
            type: BrandType,
            resolve(parent, args){
                return Brand.findById(parent.brandId);
            }
        }
    })
});

export default ProductType;