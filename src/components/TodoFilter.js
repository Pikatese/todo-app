const TodoFilter = (props) => {
  const filterHandler = (e) => {
    props.setFilter(e.target.value);
  };

  return (
    <div className="TodoFilter">
      <select name="todos" onChange={filterHandler}>
        <option value="">All</option>
        <option value="completed">Completed</option>
        <option value="important">Important</option>
      </select>
    </div>
  );
};

export default TodoFilter;
