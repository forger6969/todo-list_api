const Task = require('../models/Task')
const {writeDB , readDB}  = require('../utils/fileDB')

const createTask = async (req , res) =>{
try {
      const {title} = req.body

      if (!title) {
       return res.status(400).json({"message":"Title is required"})
      }

const task = new Task({title})
task.save()

res.status(201).json({"message":"Task is created" , task})

} catch (error) {
    console.log(error.message);
    
}

}

const getAll = async (req , res) =>{
    const tasks = await Task.find()
    res.json(tasks)
}

const setStatus = async (req , res) => {
    try {
        const {id} = req.params
const updates = req.body

const changeUpdates = await Task.findByIdAndUpdate(
    id,
    updates,
    {new:true , runValidators:true}
)

if (!changeUpdates) {
    return res.status(400).json({"message":"Task is not found"})
}

res.status(200).json({"message":"Change succes" , changeUpdates})
    } catch (err) {
        console.log(err);
        
    }

}

const getById = async (req , res) =>{
const {id} = req.params

const db = readDB()
const find = await Task.findById(id)

if (!find) {
   return res.status(404).json({"message":"Task not found"})
}

res.status(200).json(find)

}


module.exports = {
    createTask,
    getAll,
    setStatus,
    getById,
   
}