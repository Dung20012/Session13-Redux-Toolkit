import React, { useState } from 'react';

export default function Navbar() {
    const [taskName, setTaskName] = useState('');
    const [todos, setTodos] = useState([
        { id: 1, name: 'Quét nhà', completed: true },
        { id: 2, name: 'Giặt quần áo', completed: false },
    ]);
    const [error, setError] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        const trimmedName = taskName.trim();

        // Validate rỗng
        if (!trimmedName) {
            setError('Tên công việc không được để trống!');
            return;
        }

        // Validate trùng
        const isDuplicate = todos.some(
            (todo) => todo.name.toLowerCase() === trimmedName.toLowerCase()
        );
        if (isDuplicate) {
            setError('Tên công việc không được trùng!');
            return;
        }

        // Hợp lệ → thêm vào danh sách
        const newTodo = {
            id: Date.now(),
            name: trimmedName,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setTaskName('');
        setError('');
    };

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card">
                            <div className="card-body p-5">
                                <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleAddTask}>
                                    <div className="form-outline flex-fill">
                                        <input
                                            type="text"
                                            id="form2"
                                            className="form-control"
                                            value={taskName}
                                            onChange={(e) => setTaskName(e.target.value)}
                                        />
                                        <label className="form-label" htmlFor="form2">
                                            Nhập tên công việc
                                        </label>
                                        {error && <small className="text-danger">{error}</small>}
                                    </div>
                                    <button type="submit" className="btn btn-info ms-2">
                                        Thêm
                                    </button>
                                </form>

                                <ul className="nav nav-tabs mb-4 pb-2">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link active">Tất cả</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link">Đã hoàn thành</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link">Chưa hoàn thành</a>
                                    </li>
                                </ul>

                                <div className="tab-content" id="ex1-content">
                                    <div className="tab-pane fade show active">
                                        <ul className="list-group mb-0">
                                            {todos.map((todo) => (
                                                <li
                                                    key={todo.id}
                                                    className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                                                    style={{ backgroundColor: '#f4f6f7' }}
                                                >
                                                    <div>
                                                        <input
                                                            className="form-check-input me-2"
                                                            type="checkbox"
                                                            defaultChecked={todo.completed}
                                                        />
                                                        {todo.completed ? <s>{todo.name}</s> : <span>{todo.name}</span>}
                                                    </div>
                                                    <div className="d-flex gap-3">
                                                        <i className="fas fa-pen-to-square text-warning" />
                                                        <i className="far fa-trash-can text-danger" />
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
