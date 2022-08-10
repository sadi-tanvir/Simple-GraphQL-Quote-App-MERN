import { ApolloServer, gql } from "apollo-server"
import "dotenv/config"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import "./DB/db.js"
import resolvers from "./resolvers.js"
import typeDefs from "./schemaGql.js"


// apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})


// server listen
server.listen().then((url) => {
    console.log(`server is listen on port ${url.url}`);
})