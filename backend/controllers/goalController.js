const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get goals' })
}

const setGoal = (req, res) => {
    console.log(req.body)
    res.status(200).json({ message: 'Goal set' })
}

const updateGoal = (req, res) => {
    res.status(200).json({ message: `Goal ${req.params.id} updated` })
}

const deleteGoal = (req, res) => {
    res.status(200).json({ message: `Goal ${req.params.id} deleted` })
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}