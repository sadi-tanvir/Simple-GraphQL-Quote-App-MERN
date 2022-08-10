import { quotes, users } from "./fakedb.js"
import { randomBytes } from "crypto"
import User from "./models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export default {
    Query: {
        users: async () => {
            const users = await User.find({})
            return users
        },
        user: (parent, args) => users.find(user => user._id === args._id),
        quotes: () => quotes,
        quote: (parent, args) => quotes.filter(quote => quote.by === args.by)
    },
    User: {
        quotes: (user) => quotes.filter(quote => {
            return quote.by === user._id
        })
    },
    Quote: {
        author: (q) => users.find(ur => {
            return ur._id === q.by
        })
    },
    Mutation: {
        // user signup
        signupUser: async (_, { userNew }) => {
            const { firstName, lastName, email, password } = userNew

            // checking user existence
            const isUserExist = await User.findOne({ email })
            if (isUserExist) throw new Error("User Already Exist")

            // password hash
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);

            // create a new user
            const user = User.create({
                firstName,
                lastName,
                email,
                password: hash
            })

            return user
        },

        // user signin
        signInUser: async (_, { userSignIn }) => {
            const { email, password } = userSignIn;

            // find user from database
            const user = await User.findOne({ email })
            if (!user) throw new Error("Invalid Credentials.")

            // password verify
            const isMatchPassword = bcrypt.compareSync(password, user.password)
            if (!isMatchPassword) throw new Error("Invalid Credentials.")

            const token = jwt.sign({ email:user.email }, process.env.SECRET_KEY)

            return {
                message: 'User Login Successfully.',
                token,
                user
            }
            

        }
    }
}