const AddTodo = (props) => {
  const addTodoHandler = (e) => {
    props.setNewTodo(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (props.newTodo !== "") {
      props.setTodos([
        ...props.todos,
        {
          title: props.newTodo,
          completed: false,
          important: false,
          id: Math.random() * 1000,
        },
      ]);
      props.setNewTodo("");
    }
  };

  return (
    <div className="AddTodo">
      <h2>New todo:</h2>
      <form onSubmit={submitTodoHandler}>
        <label htmlFor="title" className="u-visuallyHidden">
          Add a todo
        </label>
        <input
          id="title"
          type="text"
          className="TodoInput"
          value={props.newTodo}
          onChange={addTodoHandler}
        />
        <button className="Button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
