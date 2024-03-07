import React, { useState } from 'react';
import { getTodos } from '../services/todoService';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const handleGetTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
      console.log(data);
    } catch (error) {
      console.error('Failed to get todos:', error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={handleGetTodos}>Get Todos</button>
    </div>
  );
};

export default TodoApp;
