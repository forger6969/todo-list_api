const Task = require('../models/Task')
const {writeDB , readDB}  = require('../utils/fileDB')

const createTask = (req , res) =>{
    const {title} = req.body

    if (!title) {
    return res.status(400).send({"message":"Title is required"})
    }

    const db = readDB()
    const newTask = new Task(title)
    db.tasks.push(newTask)

    writeDB(db)

    res.status(200).send({"message":"Task created!" , newTask})
}

const getAll = (req , res) =>{
    const db = readDB()
    res.json(db.tasks)
}

const setStatus = (req , res) => {
    const {id} = req.params
const {completed} = req.body


const db = readDB()
const index = db.tasks.findIndex((f)=> f.id === id)

if (index === -1) {
    return res.status(404).send({"message":"Task not found"})
}

if (typeof completed !== "boolean") {
 return res.status(400).send({ message: "completed must be boolean" });
}

db.tasks[index].completed = completed

writeDB(db)

const changed  = db.tasks[index]
res.status(200).send({"message":"status changed!" , changed})

}

const getById = (req , res) =>{
const {id} = req.params

const db = readDB()
const find = db.tasks.find((f)=> f.id === id)
res.json(find)

}

const setTitle = (req , res) => {
const {id} = req.params
const body = req.body
const db = readDB()

if (!id) {
   return res.status(404).json({"message":"user is not found"})
    
}

if (!body.title) {
   return res.status(400).json({"message":"Title is required"})
}

const index = db.tasks.findIndex((f)=> f.id === id)

if (index === -1) {
    return res.status(404).json({"message":"User is not found"})
}

db.tasks[index].title = body.title
writeDB(db)

const changedTask = db.tasks[index]
res.json({"message":"Title changed" , changedTask})

}

module.exports = {
    createTask,
    getAll,
    setStatus,
    getById,
    setTitle
}