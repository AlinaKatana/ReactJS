import React, { useState } from "react";

export function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
      setNewTodo("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (id, newText) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    }));
    setEditingTodoId(null);
    setEditTodoText("");
  };

  const handleCheckboxChange = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    }));
  };

  const handleEditClick = (id, text) => {
    setEditingTodoId(id);
    setEditTodoText(text);
  };

  const handleEditCancel = () => {
    setEditingTodoId(null);
    setEditTodoText("");
  };

  return (
    <div id="app">
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Done</th>
            <th>Task Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td><input type="checkbox" checked={todo.done} onChange={() => handleCheckboxChange(todo.id)} /></td>
              <td>
                {editingTodoId === todo.id ? (
                  <input
                    type="text"
                    value={editTodoText}
                    onChange={(e) => setEditTodoText(e.target.value)}
                  />
                ) : (
                  <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
                )}
              </td>
              <td>
                {editingTodoId === todo.id ? (
                  <>
                    <button onClick={() => handleEdit(todo.id, editTodoText)}>Save</button>
                    <button onClick={handleEditCancel}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleEditClick(todo.id, todo.text)}>Edit</button>
                )}
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
