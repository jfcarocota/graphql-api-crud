import graphql from 'graphql';
import RootQuery from './RootQuery.js';
import Mutation from './Mutation.js';


const {GraphQLSchema}  = graphql;

/*
mutation{
  addProduct(name: "Mario Odessey", price: "1350", descp: "Juego de video", brandId: 2){
    name
    price
    descp
    brandId
  }
}

mutation{
  editProduct(id: 1, name: "CocaCola Original", price: "16", descp: "Refresco sabor cola", brandId: 1){
    name
    price
    descp
    brandId
  }
}

{
  products{
    name
    price
    descp
    descp
    brand{
      name
    }
  }
}

{
  product(id: 1){
    name
    price
    descp
    brand{
      name
    }
  }
}

{
	brands{
    name
    products{
      name
    }
  }
}

{
	brand(id: 2){
    name
    products{
      name
    }
  }
}
*/


export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});