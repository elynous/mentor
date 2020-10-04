const express = require('express')
const { ApolloServer, AuthenticationError, UserInputError } = require("apollo-server-express")
const mongoose = require('mongoose')
// const cors = require('cors')
// const helmet = require('helmet')
// const morgan = require('morgan')
const getToken = require('./requireAuth')
const resolvers = require('./resolvers/resolvers')
const typeDefs = require('./typeDefs')
const Users = require('./model/Users') 
require('dotenv').config()

const PORT = process.env.PORT

const startServer = async() => {
    const app = express()
    
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: async({req}) => {
          
            const token = req.headers.authorization || ''
            const user = getToken(token)
            console.log(user)
            if(!user) throw new AuthenticationError("you must be logged in")
            return { user, db: { Users } }    
            
        }
    })
    apolloServer.applyMiddleware({ app })

    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    },(err)=>{
        if(err) throw err;
        console.log("DB Connected Successfully");
    })

    // app.use(cors())
    // app.use(morgan('common'))
    // app.use(helmet())

    app.listen(PORT, () => {
        console.log(`The server is running on http://localhost:${PORT}${apolloServer.graphqlPath}`)
    })
    
}

startServer()