import React, { useEffect, useState } from 'react';

export default function TodoCompleted() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },[tasks])

  
  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, {text: task, id: Date.now(), completed: false}]);
      setTask('');
    }
  }

  const handleRemove = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const handleEdit = (id, text) => {
    setEditText(text);
    setEditId(id);
  }

  const handleSave = (id) => {
    setTasks(tasks.map((task)=>(
      task.id === id 
      ? {...task, text: editText} 
      : task
    )))
    setEditText('');
    setEditId(null);
  }

  const filteredTasks = tasks.filter((task)=>{
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true
  })
  const toggleComplete = (id) => {
    setTasks(tasks.map((task)=>(
      task.id === id
      ? {...task, completed: !task.completed}
      : task
    )));
  }

  return (
    <div className="content">
      <h1>Todo List</h1>
      <input 
        type="text" 
        value={task}
        onChange={(e)=>{setTask(e.target.value)}}
        placeholder='Write your task'
      />
      <button onClick={handleAddTask}>Add Task</button>

      <div>
        <button onClick={()=>{setFilter('all')}}>All</button>
        <button onClick={()=>{setFilter('active')}}>Active</button>
        <button onClick={()=>{setFilter('completed')}}>Completed</button>
        <button>Extra</button>
      </div>

      <ul>
        { filteredTasks.length === 0
        ? <p>No tasks available</p>
        : 
        filteredTasks.map((task) => (
          <li key={task.id}>
            <span 
              style={{textDecoration: task.completed 
                ? 'line-through' 
                : 'none'}} 
              onClick={() => toggleComplete(task.id)}>
              {task.text}
            </span>
            {
            editId === task.id 
            ? 
              (
                <>
                  <input 
                    type="text" 
                    value={editText}
                    onChange={(e) => {setEditText(e.target.value)}}
                  />
                  <button onClick={()=>{handleSave(task.id)}}>Save</button>
                  <button onClick={()=>{setEditId(null)}}>Cancel</button>
                </>
              ) 
            : 
              (
                <>
                  {/* {task.text} */}
                  <button onClick={()=>{handleEdit(task.id, task.text)}}>Edit</button>
                </>
              )}
            <button onClick={() => handleRemove(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
