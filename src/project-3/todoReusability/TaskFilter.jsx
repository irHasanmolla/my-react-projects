import React from 'react';

export default function TaskFilter({ current, setFilter }) {
  return (
    <div style={{ marginTop: '20px' }}>
        <button disabled={current === 'all'} onClick={()=>{setFilter('all')}}>All</button>
        <button disabled={current === 'active'} onClick={()=>{setFilter('active')}}>Active</button>
        <button disabled={current === 'completed'} onClick={()=>{setFilter('completed')}}>Completed</button>
    </div>
  );
}
