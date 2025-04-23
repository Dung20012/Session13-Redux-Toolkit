import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function TodoList() {
  const todos = useSelector((state) => state.todos); // Lấy tất cả công việc
  const [filter, setFilter] = useState('all'); // all | completed | uncompleted

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'uncompleted') return !todo.completed;
    return true; // all
  });

  return (
    <>
      {/* Tabs */}
      <ul className="nav nav-tabs mb-4 pb-2">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tất cả
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Đã hoàn thành
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${filter === 'uncompleted' ? 'active' : ''}`}
            onClick={() => setFilter('uncompleted')}
          >
            Chưa hoàn thành
          </button>
        </li>
      </ul>

      {/* Danh sách công việc */}
      <ul className="list-group mb-0">
        {filteredTodos.length === 0 ? (
          <li className="list-group-item text-center">Không có công việc nào</li>
        ) : (
          filteredTodos.map((task) => (
            <li key={task.id} className="list-group-item">
              {task.name}
            </li>
          ))
        )}
      </ul>
    </>
  );
}
