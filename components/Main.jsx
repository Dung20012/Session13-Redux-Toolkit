import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [error, setError] = useState('');

    // Lấy dữ liệu từ db.json khi load trang
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const res = await axios.get('http://localhost:3001/todos');
            setTodos(res.data);
        } catch (err) {
            console.error('Lỗi khi lấy danh sách công việc:', err);
        }
    };

    const handleAddTodo = async (e) => {
        e.preventDefault();

        if (!newTodo.trim()) {
            setError('Tên công việc không được phép để trống');
            return;
        }

        const isDuplicate = todos.some(todo => todo.text.toLowerCase() === newTodo.toLowerCase());
        if (isDuplicate) {
            setError('Tên công việc đã tồn tại');
            return;
        }

        try {
            const newTodoItem = {
                text: newTodo,
                completed: false,
            };

            const res = await axios.post('http://localhost:3001/todos', newTodoItem);

            setTodos([...todos, res.data]); // Thêm công việc mới vào state
            setNewTodo('');
            setError('');
        } catch (err) {
            console.error('Lỗi khi thêm công việc:', err);
        }
    };

    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="card-body p-5">
                                    {/* Form nhập công việc */}
                                    <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleAddTodo}>
                                        <div className="form-outline flex-fill">
                                            <input
                                                type="text"
                                                id="form2"
                                                className="form-control"
                                                value={newTodo}
                                                onChange={(e) => setNewTodo(e.target.value)}
                                            />
                                            <label className="form-label" htmlFor="form2">
                                                Nhập tên công việc
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-info ms-2">
                                            Thêm
                                        </button>
                                    </form>

                                    {/* Hiển thị lỗi nếu có */}
                                    {error && <p className="text-danger">{error}</p>}

                                    {/* Tabs navs */}
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

                                    {/* Danh sách công việc */}
                                    <div className="tab-content" id="ex1-content">
                                        <div className="tab-pane fade show active">
                                            <ul className="list-group mb-0">
                                                {todos.map(todo => (
                                                    <li
                                                        key={todo.id}
                                                        className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
                                                        style={{ backgroundColor: "#f4f6f7" }}
                                                    >
                                                        <div>
                                                            <input
                                                                className="form-check-input me-2"
                                                                type="checkbox"
                                                                checked={todo.completed}
                                                                readOnly
                                                            />
                                                            {todo.text === "Quét nhà" ? (
                                                                <s>{todo.text}</s>
                                                            ) : (
                                                                <span>{todo.text}</span>
                                                            )}
                                                        </div>
                                                        <div className="d-flex gap-3">
                                                            <i
                                                                className="fas fa-pen-to-square text-warning"
                                                                style={{ cursor: 'pointer' }}
                                                            />
                                                            <i
                                                                className="far fa-trash-can text-danger"
                                                                style={{ cursor: 'pointer' }}
                                                            />
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
        </div>
    );
}
