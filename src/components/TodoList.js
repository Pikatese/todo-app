import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div className="TodoList">
      {props.filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          important={todo.important}
          todos={props.todos}
          setTodos={props.setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
