import express from 'express';
import expressgraphql from 'express-graphql';
import Schema from './schema/Schema.js';
import mongoose from 'mongoose';
import cors from 'cors';

const {graphqlHTTP} = expressgraphql;

const app = express();
const port = 5000;

const dbName = 'graphql-test'
const user = 'admin';
const dbPassword = 'bhh9vKabjxdc5RZj';
const connectionString = `mongodb+srv://${user}:${dbPassword}@cluster0.k9ycc.mongodb.net/${dbName}?retryWrites=true&w=majority`;

app.use(cors())

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('connected'))
.catch(e => console.log(`[Error]: ${e}`));

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

app.listen(port, console.log(`listening at: http://localhost:${port}/graphql`));