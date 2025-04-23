import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../features/todos/todoThunks';

export default function TodoItem({ task }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);

  const handleUpdate = () => {
    if (editedName.trim() === '') return;
    dispatch(updateTodo({ ...task, name: editedName }));
    setEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div>
        <input type="checkbox" checked={task.completed} readOnly className="me-2" />
        {editing ? (
          <input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            onBlur={handleUpdate}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleUpdate();
              if (e.key === 'Escape') setEditing(false);
            }}
            autoFocus
          />
        ) : (
          <span>{task.name}</span>
        )}
      </div>
      <div className="d-flex gap-2">
        <i
          className="fas fa-pen-to-square text-warning"
          onClick={() => setEditing(true)}
          role="button"
        />
      </div>
    </li>
  );
}
