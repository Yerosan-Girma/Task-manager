function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li className={`task-item ${task.completed ? 'task-item--done' : ''}`}>
      <button
        className={`check-btn ${task.completed ? 'check-btn--checked' : ''}`}
        onClick={() => toggleTask(task.id)}
        aria-label="Toggle task"
      >
        {task.completed ? '✓' : ''}
      </button>

      <span
        className={`task-text ${task.completed ? 'task-text--done' : ''}`}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>

      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  );
}

export default TaskItem;
