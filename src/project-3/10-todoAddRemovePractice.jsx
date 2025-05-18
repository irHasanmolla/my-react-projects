import { useState } from "react"

export default function TodoApp() {
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState('')
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')
  const [filter, setFilter] = useState('all')
  
  const handleAddTask = () => {
    if (task.trim()!=='') {
      setTasks([...tasks, {text: task, id: Date.now(), completed: false}]);
      setTask('');
    }
  }

  const handleRemove = (id) => {
    setTasks(tasks.filter((t)=>t.id !== id));}


  const handleEdit =  (id, text) => {
    setEditId(id);
    setEditText(text);}


  const handleSave = (id) => {
    setTasks(tasks.map((t)=>(
      t.id === id 
      ? {...t, text: editText} 
      : t
    )))
    setTask('');
    setEditId(null);}

  const filteredTasks = tasks.filter((t)=>{
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true; 
  })

  const ToggleClick = (id) => {
    setTasks(tasks.map((t)=>(
      t.id === id 
      ? {...t, completed: !t.completed} 
      : t
    )))
  }

  
  return (
    <div className='content'>
      <h1>Todo List:</h1>
      <input 
        type="text" 
        value={task}
        onChange={(e => setTask(e.target.value))}
        placeholder='Add a new task...'
      />
      <button onClick={handleAddTask}>Add Task</button>

      <div>
        <button onClick={()=>{setFilter('all')}}>All</button>
        <button onClick={()=>{setFilter('active')}}>Active</button>
        <button onClick={()=>{setFilter('completed')}}>Completed</button>
      </div>

      <ul>
        {filteredTasks.length === 0
        ? <li>No tasks available</li>
        :(        
          filteredTasks.map((t)=>(
          <li key={t.id}>
            <span onClick={()=>ToggleClick(t.id)} style={{textDecoration: t.completed ? 'line-through' : 'none'}}>
              {t.text}
            </span>
            {editId === t.id
            ?
              (
                <>
                  <input 
                    type="text" 
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={()=>{handleSave(t.id)}}>Save</button>
                  <button onClick={()=>{setEditId(null)}}>Cancel</button>
                </>
              )
              : 
              (
                <>
                  {/* {t.text} */}
                  <button onClick={()=>handleEdit(t.id, t.text)}>Edit</button>
                </>
              )}
            <button onClick={()=>handleRemove(t.id)}>Remove</button>
          </li>
        )))
        }
      </ul>
    </div>
  )
}
