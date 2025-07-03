import { v4 as uuidv4 } from 'uuid';

const Todos = {
    todos: [],
    addTodo: function (name, status) {
        console.log("Adding todo")
        this.todos.push({
            name: this.current.name, status: this.defaultStaus, id: uuidv4()
        })
        this.current.name = ""
    },
    current: {
        name: ""
    },
    defaultStaus: "new"
}

export default Todos