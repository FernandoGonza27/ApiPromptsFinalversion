const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql")
const { schema } = require("./graphql/shemagraphql");
const { graphresolvers } = require("./graphql/resolversgraphql");
const  tagsRoute  = require("./routes/tags.js");
dotenv.config();
const app = express();
//funcion de la coneccion con mongodb
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        throw error;
    }
}

// parser for the request body (required for the POST and PUT methods)
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// check for cors
const cors = require("cors");
app.use(cors({
    domains: '*',
    methods: "*"
}));


app.use("/api/tags",tagsRoute);

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: graphresolvers,
        graphiql: true,
    })
)



//Middlewere para error handlind, entregando mensajes de manera personalizada
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || 500
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
});
app.listen(3001, () => {
    connect();
    console.log(`Example app listening on port 3001!`)
})
