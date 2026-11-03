import { useEffect, useState } from 'react';
import TaskList from './Componants/TaskList';
import TaskInput from './Componants/TaskInput';
import Filter from './Componants/Filter';

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
    return [];
  }
}

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(loadTasks);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch {
      // Storage can fail in private browsing or restricted environments.
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

  const clearCompletedTasks = () => {
    setTasks((currentTasks) => currentTasks.filter((item) => !item.completed));
  };

  const resetTasks = () => {
    setTasks([]);
    setFilter('all');
  };

  const filteredTasks = tasks.filter((item) => {
    if (filter === 'completed') return item.completed;
    if (filter === 'active') return !item.completed;
    return true;
  });

  const completedCount = tasks.filter((item) => item.completed).length;
  const activeCount = tasks.length - completedCount;
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

        <div className="stats-grid" aria-label="Task summary">
          <div className="stat-card">
            <span className="stat-label">Active</span>
            <strong className="stat-value">{activeCount}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Completed</span>
            <strong className="stat-value">{completedCount}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Progress</span>
            <strong className="stat-value">{Math.round(progress)}%</strong>
          </div>
        </div>

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

        <div className="task-actions">
          {completedCount > 0 && (
            <button
              className="clear-completed-btn"
              type="button"
              onClick={clearCompletedTasks}
            >
              Clear completed ({completedCount})
            </button>
          )}
          {tasks.length > 0 && (
            <button className="reset-btn" type="button" onClick={resetTasks}>
              Reset list
            </button>
          )}
        </div>

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
