import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    if (filter !== "")
      setFilteredTodos(todos.filter((todo) => todo[filter] === true));
    else setFilteredTodos(todos);
  };

  const removeAllHandler = () => {
    setTodos([]);
  };

  useEffect(() => {
    // Get todos from local storage on initial load
    if (localStorage.getItem("todos") === null)
      localStorage.setItem("todos", JSON.stringify([]));
    else setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  useEffect(() => {
    filterHandler();
    // Save todos to local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [filter, todos]);

  return (
    <div>
      <header>
        <h1>Todos awesome app</h1>
      </header>
      <main>
        <div className="Container">
          <AddTodo
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            todos={todos}
            setTodos={setTodos}
            setFilter={setFilter}
          />
          {todos.length > 0 && <TodoFilter setFilter={setFilter} />}
          <TodoList
            filteredTodos={filteredTodos}
            todos={todos}
            setTodos={setTodos}
          />
          {todos.length > 0 && (
            <button
              className="Button Button--remove"
              onClick={removeAllHandler}
            >
              Remove all todos
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
