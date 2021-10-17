const TodoItem = (props) => {
  const importantTodoHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.id) {
          return {
            ...item,
            important: !item.important,
          };
        }
        return item;
      })
    );
  };

  const completeTodoHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteTodoHandler = () => {
    props.setTodos(props.todos.filter((item) => item.id !== props.id));
  };

  return (
    <div className="Card">
      <div className="Card-content">
        <h2>{props.title}</h2>
        <div className="Card-actions">
          <button
            className={`Card-button Card-button--orange ${
              props.important ? "Card-button--true" : ""
            }`}
            onClick={importantTodoHandler}
          >
            <i className="fas fa-exclamation-circle"></i>
          </button>
          <button
            className={`Card-button Card-button--green ${
              props.completed ? "Card-button--true" : ""
            }`}
            onClick={completeTodoHandler}
          >
            <i className="fas fa-check"></i>
          </button>
          <button
            className="Card-button Card-button--red"
            onClick={deleteTodoHandler}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
