import React, { useState, useEffect } from 'react';
import TaskFilter from './TaskFilter';
import TaskItem from './TaskItem';

function TodoAppPractice() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState('all'); // New state for filter

  // Load tasks on first render
  useEffect(() => {
    try {
      const stored = localStorage.getItem('tasks');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setTasks(parsed);
        }
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error);
    }
  }, []);

  // Save tasks when tasks change
  useEffect(() => {
    console.log("Saving tasks to localStorage:", tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const handleRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id, current) => {
    setEditText(current);
    setEditId(id);
  };

  const handleSave = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text: editText } : t)));
    setEditText('');
    setEditId(null);
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true; // all tasks
  })

  const toggleClick = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <div className="content">
      <p>To-do List</p>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Write Task Here"
      />
      <button onClick={addTask}>Add Task</button>

      <TaskFilter current={filter} setFilter={setFilter}/>

      <ul>
        {
          filteredTasks.length === 0 
          ? 
            (
              <li>No task Available</li>
            )
          :
            filteredTasks.map((t) => (
              <TaskItem 
                key={t.id}
                task={t}
                onToggle={toggleClick}
                onEdit={handleEdit}
                onRemove={handleRemove}
                isEditing={editId === t.id}
                editText={editText}
                setEditText={setEditText}
                onSave={handleSave}
                onCancel={() => setEditId(null)}
              />
            ))
        }
      </ul>
    </div>
  );
}

export default TodoAppPractice;
