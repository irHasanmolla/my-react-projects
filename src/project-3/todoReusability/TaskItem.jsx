import React from 'react'

export default function TaskItem({
  task,
  onToggle,
  onEdit,
  onRemove,
  isEditing,
  editText,
  setEditText,
  onSave,
  onCancel
}) {

  return (
    <li>
      <span 
        onClick={() => {onToggle(task.id)}} 
        style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.text}
      </span>

      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={() => onSave(task.id)}>Save</button>
          <button onClick={() => onCancel(null)}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={() => onEdit(task.id, task.text)}>Edit</button>
        </>
      )}
      <button onClick={() => onRemove(task.id)}>Remove</button>
    </li>

  )
}