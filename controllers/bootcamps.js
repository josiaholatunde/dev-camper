
//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
    return res.json({
        'message': 'Successfully retrieved bootcamps'
    })
}

//@desc Get a bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = (req, res, next) => {
    return res.json({
        'message': `Successfully retrieved bootcamp ${req.params.id}` 
    })
}

//@desc Create a bootcamp
//@route POST /api/v1/bootcamps/:id
//@access Private
exports.createBootcamp = (req, res, next) => {
    return res.json({
        'message': `Successfully created bootcamp` 
    })
}


//@desc Update a bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Private
exports.updateBootcamp = (req, res, next) => {
    return res.json({
        'message': `Successfully updated bootcamp ${req.params.id}` 
    })
}

//@desc Delete a bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp = (req, res, next) => {
    return res.json({
        'message': `Successfully deleted bootcamp ${req.params.id}` 
    })
}