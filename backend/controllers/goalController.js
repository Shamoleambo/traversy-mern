const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' })
})

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add text field')
    }
    res.status(200).json({ message: 'Goal set' })
})

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Goal ${req.params.id} updated` })
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Goal ${req.params.id} deleted` })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}