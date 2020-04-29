const express = require('express')
const dotenv = require('dotenv')
const loggerMiddleware = require('./middlewares/logger')
const morgan = require('morgan')
//Route files
const bootcampRoutes = require('./routes/bootcamps')

dotenv.config({
    path: './config/config.env'
})

const app = express()


const PORT = process.env.PORT || 8000



// app.use(loggerMiddleware)
//Development Loggers
app.use(morgan('dev'))

app.use('/api/v1/bootcamps', bootcampRoutes)


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))