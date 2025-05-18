import React, {useState} from 'react'

const TodoAddRemove = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTask = () => {
    if (task.trim() !== ''){
      setTasks([...tasks, {text: task, id: Date.now(), completed: false}]);
      setTask('');
    }
  }

  const handleRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  }
  const handleSave = (id) => {
    setTasks(tasks.map((task) => (
      task.id === id 
      ? {...task, text: editText} 
      : task
    )))
    setTask('');
    setEditId(null);
  }
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  })
  const ToggleClick = (id) => {
    setTasks(tasks.map((task) => (
      task.id === id 
      ? {...task, completed: !task.completed} 
      : task
    )))
  }

  return (
    <div className="content">
      <h1>Todo App:</h1>
      <input 
        type="text" 
        placeholder='Add a new task...'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => handleAddTask()}>Add Task</button>

      <div>
        <button onClick={()=>setFilter('all')}>All</button>
        <button onClick={()=>setFilter('active')}>Active</button>
        <button onClick={()=>setFilter('completed')}>Completed</button>
      </div>

      <ul>
          {filteredTasks.length === 0
          ? <p>No Task Found</p>
          :
          filteredTasks.map((t) => (
            <li key={t.id}>
            {editId === t.id 
            ? (
                <>
                  <input 
                    type="text" 
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={()=>handleSave(t.id)}>Save</button>
                  <button onClick={()=>setEditId(null)}>Cancel</button>
                </>
              )
            : (
              <>
                  <span 
                    onClick={() => ToggleClick(t.id)} 
                    style={{textDecoration: t.completed 
                      ? 'line-through' 
                      : 'none'}}>
                    {t.text}
                  </span>
                  <button onClick={() => handleEdit(t.id, t.text)}>Edit</button>
              </>
              )}
              <button onClick={() => handleRemove(t.id)}>Remove</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TodoAddRemove;