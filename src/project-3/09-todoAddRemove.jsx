import { useState } from "react";

const TodoAddRemove = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [updateId, setUpdateId] = useState(null);
  const [updateText, setUpdateText] = useState('');

  const handleClick = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, {text: task, id: Date.now()}]);
    }
    setTask('');
  }

  const handleRemove = (id) => {
    setTasks(tasks.filter((t)=>t.id !== id));
  }

  const updateInfo = (id, text) => {
    setUpdateId(id);
    setUpdateText(text);
  }

  const handleSave = (id) => {
    setTasks(tasks.map((t)=>(
      t.id === id
      ? {...t, text: updateText}
      : t
    )));
    setUpdateText('')
    setUpdateId(null)
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input 
        type="text" 
        placeholder="Write Task Here"
        value={task}
        onChange={e=>setTask(e.target.value)}
      />
      <button onClick={()=>handleClick()}>Add Text</button>

      <ul>
        {tasks.map((t)=>(

          <li key={t.id}>
            {updateId === t.id 
            ? (
              <>
              <input 
                type="text" 
                value={updateText}
                onChange={e=>setUpdateText(e.target.value)}
              />
              <button onClick={()=>handleSave(t.id)}>Save</button>
              <button onClick={()=>setUpdateId(null)}>Cancel</button>
              </>
            )
            : (
              <>
                {t.text}
                <button onClick={()=>updateInfo(t.id, t.text)}>Edit</button>
              </>
            )
            }
            <button onClick={()=>handleRemove(t.id)}>Remove</button>
          </li>
        ))}
      </ul>


    </div>
    
  )
}

export default TodoAddRemove;