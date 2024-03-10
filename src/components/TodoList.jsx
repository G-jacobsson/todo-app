import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => {
  const sortedTodos = todos.sort((a, b) => a.done - b.done);
  return (
    <div>
      <h1 className="text-3xl font-bold">Todo List</h1>
      <ul className="mt-10 list-disc border-cyan-300 border-2 p-4 shadow-2xl rounded">
        {sortedTodos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            className={index % 2 === 0 ? '' : 'bg-slate-600 p-1 rounded'}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
