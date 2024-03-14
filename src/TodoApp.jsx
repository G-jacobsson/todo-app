import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import { getTodos } from './services/todoService';
import TodoForm from './components/TodoForm';
import { Todo } from './models/Todo';
import FilterTodo from './components/FilterTodo';

const TodoApp = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos') || '[]')
  );
  const [filter, setFilter] = useState('all');

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

  const addTodo = (newTodo, priority) => {
    const todoToAdd = new Todo(Date.now(), newTodo, false, priority);
    setTodos([todoToAdd, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  let filteredTodos = todos;

  switch (filter) {
    case 'done':
      filteredTodos = todos.filter((todo) => todo.done);
      break;
    case 'not done':
      filteredTodos = todos.filter((todo) => !todo.done);
      break;
    case 'high':
      filteredTodos = todos.filter((todo) => todo.priority === 'high');
      break;
    case 'medium':
      filteredTodos = todos.filter((todo) => todo.priority === 'medium');
      break;
    case 'low':
      filteredTodos = todos.filter((todo) => todo.priority === 'low');
      break;
    case 'all':
    default:
      filteredTodos = todos;
      break;
  }

  return (
    <>
      <div className="w-[100vw] min-h-[100vh] flex flex-col text-center items-center justify-start p-3">
        <img
          src="/logoTodoApp.png"
          className="mt-20 mb-20"
          alt="logo"
        />
        <TodoForm addNewTodo={addTodo} />
        <FilterTodo
          filter={filter}
          setFilter={setFilter}
        />
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
};

export default TodoApp;
