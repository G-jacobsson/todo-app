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

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (newTodo) => {
    const todoToAdd = new Todo(Date.now(), newTodo, false);
    setTodos([...todos, todoToAdd]);
  };

  return (
    <>
      <div className="w-[100vw] bg-slate-500 h-[100vh] flex flex-col text-center items-center justify-center p-3">
        <img
          src="/logoTodoApp.png"
          className="mb-20"
          alt="logo"
        />
        <TodoForm addNewTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
        />
      </div>
    </>
  );
};

export default TodoApp;
