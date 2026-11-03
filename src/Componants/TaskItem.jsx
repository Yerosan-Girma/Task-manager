function TaskItem({ task, deleteTask, toggleTask }) {
  const statusLabel = task.completed ? 'Mark task active' : 'Mark task complete';

  return (
    <li className={`task-item ${task.completed ? 'task-item--done' : ''}`}>
      <button
        type="button"
        className={`check-btn ${task.completed ? 'check-btn--checked' : ''}`}
        onClick={() => toggleTask(task.id)}
        aria-label={`${statusLabel}: ${task.text}`}
        aria-pressed={task.completed}
      >
        {task.completed ? '✓' : ''}
      </button>

      <button
        type="button"
        className={`task-text ${task.completed ? 'task-text--done' : ''}`}
        onClick={() => toggleTask(task.id)}
        aria-pressed={task.completed}
      >
        {task.text}
      </button>

      <button
        type="button"
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
        aria-label={`Delete task: ${task.text}`}
      >
        <span aria-hidden="true">✕</span>
      </button>
    </li>
  );
}

export default TaskItem;
