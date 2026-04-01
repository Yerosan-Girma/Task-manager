function TaskInput({ task, setTask, addTask }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask();
  };

  return (
    <div className="input-row">
      <input
        className="task-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
      />
      <button className="add-btn" onClick={addTask}>
        + Add
      </button>
    </div>
  );
}

export default TaskInput;
