const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken')
const Users = require('./model/Users') 

const getToken = async (token) => {

    console.log(token)

    try {
        await jwt.verfiy(token, process.env.SECRET, async(err, payload) => {
        
            if(err){
                throw new AuthenticationError("you must be logged in for that")
            }
            const { userId } = payload 
            const user = Users.findById(userId)
            user.token = token

            return user
        })
    } catch (error) {
        throw new AuthenticationError("Please Log In .")
    }
}

module.exports = getToken