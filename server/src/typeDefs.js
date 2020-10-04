const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        me: Me!
    }

    type Mutation {
        signup( signupInput: SignupInput! ): User! 
        login( loginInput: LoginInput! ): User! 
    }

    enum Roles {
        EDUCATOR
        SEEKER
    }

    type User {
        id: ID!
        name: String!
        email: String!
        token: String!
        role: Roles!
    }

    type Me {
        id: ID!
        name: String!
        email: String!
        token: String!
        role: Roles!
    }

    input SignupInput {
        name: String
        email: String
        password: String
        role: Roles
    }

    input LoginInput {
        email: String
        password: String
        role: Roles
    }
`
module.exports = typeDefs