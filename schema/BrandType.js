import graphql from 'graphql';
import database from '../database.js';
import ProductType from './ProductType.js';


const {products} = database;

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList}  = graphql;

const BrandType = new GraphQLObjectType({
    name: 'Brand',
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args){
                return products.filter(product => product.brandId == parent.id);
            }
        }
    })
});

export default BrandType;