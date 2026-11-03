function TaskInput({ task, setTask, addTask }) {
  return (
    <form className="input-row" onSubmit={addTask}>
      <label className="sr-only" htmlFor="new-task">New task</label>
      <input
        id="new-task"
        className="task-input"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Add a new task..."
        autoComplete="off"
      />
      <button className="add-btn" type="submit">
        + Add
      </button>
    </form>
  );
}

export default TaskInput;
