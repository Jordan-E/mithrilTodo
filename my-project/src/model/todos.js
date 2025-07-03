import { v4 as uuidv4 } from 'uuid';

const Todos = {
    todos: [],
    addTodo: function () {
        this.todos.push({
            name: this.current.name, status: this.defaultStaus, id: uuidv4()
        })
        this.current.name = ""
    },
    current: {
        name: ""
    },
    defaultStaus: "new",
    removeTodo: function (todoToDelete) {
        this.todos = this.todos.filter((todo) => todo.id !== todoToDelete)
    },
    completeTodo: function (todoToCompleteId) {
        this.todos = this.todos.map((todo) => todo.id !== todoToCompleteId ? {...todo} : {...todo, status: "complete"})
    }
}

export default Todos