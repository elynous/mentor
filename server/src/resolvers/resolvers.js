const { AuthenticationError } = require('apollo-server-express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const resolvers = {
    Query: {
        me: (_, args, { user }, info) => {
            
            if(!user){
                return null
            }
            return user
        }
    },
    Mutation: {
        signup: async (_, { signupInput }, { db: { Users }}, info ) => {
       
            let { name, email, password, role } = signupInput
            
            if(!email || !name || !password || !role){
                throw new AuthenticationError("Some field are missing")
            }
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const user = await Users.findOne({ email: email })
            console.log(user)
            if(user){
                throw new AuthenticationError("Eamil already exists")
            }

            const User = new Users({
                name,
                email,
                password: hash,
                role
            })
          
            await User.save()
            const token = jwt.sign({ userId: User._id}, process.env.SECRET)
            User.token = token

            return User
        },

        login: async (_, { loginInput }, { db: { Users }}) => {

            const { email, password, role } = loginInput

            if(!email || !password || !role){
                throw new AuthenticationError("Something is missing email or paswword")
            }
        
            const User = await Users.findOne({ email })

            if(!User ){
               throw new AuthenticationError("User Doesn'/t exists")
            }
            try {
                const truePassword = bcrypt.compareSync(password, User.password)
                const token = jwt.sign({ userId: User._id }, process.env.SECRET)
                User.token = token

                return User
            } catch (error) {
                throw new AuthenticationError(" Password or Email doesn't match")
            }
        }
    }
}

module.exports = resolvers