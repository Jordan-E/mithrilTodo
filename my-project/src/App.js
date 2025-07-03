import m from "mithril";
import "./App.css";
import Todos from "./model/todos"

export const App = () => {

  return {
    view: () => {
      return [
        m("div", {class: "app-container"}, [
          m("h1", "To do list:"),
          m("span", [
            m("input", {
              oninput: function (e) {Todos.current.name = e.target.value},
              value: Todos.current.name
            }),
            m("button", {
              onclick: function() {
                Todos.addTodo()
              }}, "Add"
            ),
          ]),
          m("div", Todos.todos.map((todo) => {
            return m("span", {class: "todo-item"}, [
              m("p", `${todo.name} - ${todo.status}`),
              m("button", { onclick: () => {Todos.removeTodo(todo.id)} }, "Delete"),
              m("button", { onclick: () => {Todos.completeTodo(todo.id)} }, "Compete"),
            ])
          }))
        ])
      ];
    },
  };
};
