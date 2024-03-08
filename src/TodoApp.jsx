import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import { getTodos } from './services/todoService';

const TodoApp = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos') || '[]')
  );

  useEffect(() => {
    const fetchTodos = async () => {
      if (!localStorage.getItem('todos')) {
        try {
          const data = await getTodos();
          setTodos(data);
          localStorage.setItem('todos', JSON.stringify(data));
        } catch (error) {
          throw new Error('Error fetching todos');
        }
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};

export default TodoApp;
