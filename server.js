import { ApolloServer, gql } from "apollo-server"
import "dotenv/config"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import "./DB/db.js"
import resolvers from "./resolvers.js"
import typeDefs from "./schemaGql.js"
import jwt from "jsonwebtoken"

// middleware
const context = ({ req }) => {
    const { authorization } = req.headers
    if (authorization) {
        const { email } = jwt.verify(authorization, process.env.SECRET_KEY)
        return { email }
    }
}

// apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})


// server listen
server.listen().then((url) => {
    console.log(`server is listen on port ${url.url}`);
})