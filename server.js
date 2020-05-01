const express = require('express')
const dotenv = require('dotenv')
const loggerMiddleware = require('./middlewares/logger')
const morgan = require('morgan')
const connectDB = require('./config/db')
const colors = require('colors')
const errorHandler = require('./middlewares/errors')
//Route files
const bootcampRoutes = require('./routes/bootcamps')

dotenv.config({
    path: './config/config.env'
})

connectDB();

const app = express()

app.use(express.json())


const PORT = process.env.PORT || 8000



// app.use(loggerMiddleware)
//Development Loggers
app.use(morgan('dev'))

app.use('/api/v1/bootcamps', bootcampRoutes)

app.use(errorHandler)


const server =  app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err}`)
    server.close(() => process.exit(1))
 })