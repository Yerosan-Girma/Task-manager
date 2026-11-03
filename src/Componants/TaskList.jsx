import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <ul className="task-list">
      {/* Stable task IDs let React preserve each item's identity as the list changes. */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
