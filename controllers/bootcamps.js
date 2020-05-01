const Bootcamp = require('../models/Bootcamp')
const CustomErrorResponse = require('../utils/customErrorResponse')

//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find();
        return res.status(200).json({
            'message': 'Successfully retrieved bootcamps',
            data: bootcamps
        })
    } catch (err) {
        return res.status(400).json({
            success: false
        })
    }
}

//@desc Get a bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = async (req, res, next) => {
   try {
       const bootcampId = req.params.id;
       const bootcamp = await Bootcamp.findById(bootcampId)

       if (!bootcamp) {
           return res.status(404).json({
               message: 'Not found'
           })
       }
    return res.json({
        'message': `Successfully retrieved bootcamp`,
        success: true,
        data: bootcamp 
    })
   } catch (err) {
        next(new CustomErrorResponse(`Server error occurred while retrieving bootcamp`))
   }
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
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcampId = req.params.id; 
        const bootcamp = await Bootcamp.findOneAndUpdate(bootcampId, req.body, {
            new: true,
            runValidators: true
        });
        if (!bootcamp) {
            return res.status(404).json({
                message: 'Bootcamp not found'   
            })
        }
        return res.status(200),json({
            message: 'Successfully updated bootcamp',
            data: bootcamp
        })
    } catch (err) {
        return res.status(400).json({
            success: false
        })
    }
}

//@desc Delete a bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp = (req, res, next) => {
    return res.json({
        'message': `Successfully deleted bootcamp ${req.params.id}` 
    })
}