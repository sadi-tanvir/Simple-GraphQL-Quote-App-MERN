import { ApolloServer, gql } from "apollo-server"

export default gql`

type Query {
    users: [User]
    user(_id:ID!): User
    quotes: [Quote]
    quote(by:ID!): [Quote]
}

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String!
    password: String
    quotes: [Quote]
}

type Quote {
    name: String
    by: String
    author: User
}



type Mutation {
    signupUser(userNew:UserInput!):User
    signInUser(userSignIn:UserSignInInput!):LoginReturn
}



input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
}

type LoginReturn {
    token:String
    message: String
    user: User
}

input UserSignInInput{
    email: String!
    password: String!
}
`