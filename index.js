const express = require('express');
const dotenv = require('dotenv');
const  bodyParser = require('body-parser')
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql")
const { schema } = require("./graphql/shemagraphql");
const { graphresolvers } = require("./graphql/resolversgraphql");
const  tagsRoute  = require("./routes/tags.js");
const  promptsRoute  = require("./routes/prompts.js");
const  authRoute  = require("./routes/auth.js");
const  usersRoute  = require("./routes/users.js");

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

app.use(bodyParser.json());

// check for cors
const cors = require("cors");
app.use(cors({
    domains: '*',
    methods: "*"
}));


app.use("/api/tags",tagsRoute);
app.use("/api/users",usersRoute);
app.use("/api/prompts",promptsRoute);
app.use("/api/auth",authRoute);

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
const portLisent =3300;
app.listen(portLisent, () => {
    connect();
    console.log(`Example app listening on port ${portLisent}!`)    
})
