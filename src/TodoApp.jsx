import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import { getTodos } from './services/todoService';
import TodoForm from './components/TodoForm';
import { Todo } from './models/Todo';

const TodoApp = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos') || '[]')
  );

  useEffect(() => {
    const fetchTodos = async () => {
      if (!localStorage.getItem('todos')) {
        try {
          const data = await getTodos();
          console.log(data);
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

  const addTodo = (newTodo) => {
    const todoToAdd = new Todo(Date.now(), newTodo, false);
    console.log(todoToAdd);
    setTodos([...todos, todoToAdd]);
  };

  console.log(todos);

  return (
    <>
      <div className="w-[100vw] bg-slate-500 h-[100vh] flex flex-col text-center items-center justify-center p-3">
        <img
          src="/logoTodoApp.png"
          className="top-0 absolute"
          alt="logo"
        />
        <TodoForm addNewTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </>
  );
};

export default TodoApp;
