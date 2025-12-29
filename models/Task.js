class Task {
    constructor(title) {
        this.id = Date.now().toString()
        this.title = title,
        this.completed = false,
        this.createdTime = new Date()
    }
}

module.exports = Task