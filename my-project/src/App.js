import m from "mithril";
import "./App.css";
import Todos from "./model/todos"

export const App = () => {

  return {
    view: () => {
      return [
        m("h1", "To do list:"),
        m("input", {
          oninput: function (e) {Todos.current.name = e.target.value},
          value: Todos.current.name
        }),
        m("button", {
          onclick: function() {
            console.log("testing")
            Todos.addTodo("test", "test status")
          }}, "Add"
      ),
      m("div", Todos.todos.map((todo) => m("p", `${todo.name} - ${todo.status}`)))
      ];
    },
  };
};
