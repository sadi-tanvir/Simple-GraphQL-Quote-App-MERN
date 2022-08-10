import mongoose from "mongoose"

// mongodb connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(error => console.log(error))