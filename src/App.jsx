import { useEffect, useState } from 'react';
import TaskList from './Componants/TaskList';
import TaskInput from './Componants/TaskInput';
import Filter from './Componants/Filter';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('tasks'));
    return saved || [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'completed') return t.completed;
    if (filter === 'active') return !t.completed;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="app-wrapper">
      <div className="app-card">
        <div className="app-header">
          <h1 className="app-title">My Tasks</h1>
          <span className="task-counter">
            {completedCount}/{totalCount} done
          </span>
        </div>

        <div className="progress-bar-wrapper">
          <div
            className="progress-bar-fill"
            style={{ width: totalCount > 0 ? `${(completedCount / totalCount) * 100}%` : '0%' }}
          />
        </div>

        <TaskInput task={task} setTask={setTask} addTask={addTask} />
        <Filter setFilter={setFilter} activeFilter={filter} />
        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />

        {filteredTasks.length === 0 && (
          <div className="empty-state">
            {filter === 'completed' ? '🎉 No completed tasks yet' :
             filter === 'active' ? '✅ All tasks completed!' :
             '📝 Add your first task above'}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
