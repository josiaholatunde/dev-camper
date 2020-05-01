const mmongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connection = await mmongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Mongodb connected successfully at ${connection.connection.host}`.cyan.underline)
    } catch (error) {
        console.log('An error occurred while connecting to mongodb')
    }
}

module.exports = connectDB