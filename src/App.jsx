import { useEffect, useState } from 'react';
import TaskList from './Componants/TaskList';
import TaskInput from './Componants/TaskInput';
import Filter from './Componants/Filter';

// Read valid task records once when the app initializes; bad or unavailable
// browser storage should not prevent the task manager from starting.
function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem('tasks') || '[]');
    return Array.isArray(saved)
      ? saved.filter(
          (task) =>
            task &&
            (typeof task.id === 'string' || typeof task.id === 'number') &&
            typeof task.text === 'string' &&
            typeof task.completed === 'boolean'
        )
      : [];
  } catch {
    // Ignore unavailable storage or invalid JSON and start with an empty list.
    return [];
  }
}

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState('all');

  // Persist every task-list change. Storage failures are non-fatal: the current
  // in-memory session remains interactive even if it cannot be saved.
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch {
      // The app remains usable when browser storage is disabled or full.
    }
  }, [tasks]);

  const addTask = (event) => {
    event.preventDefault();
    const text = task.trim();
    if (!text) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((currentTasks) => [...currentTasks, newTask]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => currentTasks.filter((item) => item.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Apply the selected view without changing the saved source list.
  const filteredTasks = tasks.filter((item) => {
    if (filter === 'completed') return item.completed;
    if (filter === 'active') return !item.completed;
    return true;
  });

  const completedCount = tasks.filter((item) => item.completed).length;
  const totalCount = tasks.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <main className="app-wrapper">
      <section className="app-card" aria-labelledby="app-title">
        <header className="app-header">
          <h1 className="app-title" id="app-title">My Tasks</h1>
          <span className="task-counter" aria-live="polite">
            {completedCount}/{totalCount} done
          </span>
        </header>

        <div
          className="progress-bar-wrapper"
          role="progressbar"
          aria-label="Task completion progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        <TaskInput task={task} setTask={setTask} addTask={addTask} />
        <Filter setFilter={setFilter} activeFilter={filter} />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />

        {filteredTasks.length === 0 && (
          <p className="empty-state" aria-live="polite">
            {filter === 'completed' ? '🎉 No completed tasks yet' :
              filter === 'active' ? '✅ All tasks completed!' :
                '📝 Add your first task above'}
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
