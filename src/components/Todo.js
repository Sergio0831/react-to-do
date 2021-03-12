const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  const completed = todo.isComplited ? "line-through" : "";

  return (
    <div className='todo' style={{ textDecoration: completed }}>
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
};

export default Todo;
