import { useState } from 'react'

const TodoAppPractice = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [textFilter, setTextFilter] = useState('');
  const [idFilter, setIdFilter] = useState(null);

  const handleAddTask = () =>{
    if (task.trim() !== '') {
      setTasks([...tasks, {text: task, id: Date.now()}]);
    }
    setTask('');
  }

  const handleEdit = (id, text) => {
    setTextFilter(text);
    setIdFilter(id);
  }

  const handleSave = (id) => {

    setTasks(tasks.map((t)=>(
      t.id === id
      ? {...t, text: textFilter}
      : t
    )))
    setTextFilter('')
    setIdFilter(null)
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input 
        type="text" 
        value={task}
        placeholder='Add your Task here'
        onChange={(e)=>setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((t)=>(
          <li key={t.id}>
            {idFilter === t.id
            ?
            (
              <>
              <input 
                type="text" 
                value={textFilter}
                onChange={(e)=>setTextFilter(e.target.value)}
                />
              <button onClick={()=>handleSave(t.id)}>Save</button>
              <button onClick={()=>setIdFilter(null)}>Cancel</button>
              </>
            )
            :
            (
              <>
                {t.text}
                <button onClick={()=>handleEdit(t.id, t.text)}>Edit</button>
              </>
            )
            }
            <button onClick={() =>setTasks(tasks.filter((task)=>task.id !== t.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoAppPractice