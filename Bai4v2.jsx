import React, { useState } from 'react';
import Delete from './Delete';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todos/todoThunks';

export default function TodoItem({ task }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(task.id));
    setShowModal(false);
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <div>
          <input type="checkbox" className="me-2" checked={task.completed} readOnly />
          <span>{task.name}</span>
        </div>
        <div className="d-flex gap-2">
          <i className="fas fa-pen-to-square text-warning" />
          <i
            className="far fa-trash-can text-danger"
            onClick={() => setShowModal(true)}
            role="button"
          />
        </div>
      </li>

      <Delete
        show={showModal}
        taskName={task.name}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}
