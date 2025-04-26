const handleConfirmDelete = async () => {
  try {
    await axios.delete(`http://localhost:3001/todos/${todoToDelete}`);
    setIsDeleteModalOpen(false);
    setTodoToDelete(null);
    fetchTodos(); // gọi lại API để load danh sách mới
  } catch (err) {
    console.error('Lỗi khi xóa công việc:', err);
  }
};
