const express = require('express')
const router = express.Router()
const {
    getBootcamp,
    getBootcamps,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
} = require('../controllers/bootcamps')

router.get('/', (req, res) => {
    return res.json({
        'message': 'Welcome to the bootcamper API root route'
    })
})

router.route('/')
.get(getBootcamps)
.post(createBootcamp)

router.route('/:id')
.get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp)


module.exports = router