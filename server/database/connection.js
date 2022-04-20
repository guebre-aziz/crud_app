const mongoose = require("mongoose")

const connectDB = async() => {
    try {
        // mongoDB connectiuon string
        const con = await mongoose.connect(process.env.MONGO_URL)

        console.log(`MongoDB conndected: ${con.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB