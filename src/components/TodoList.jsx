import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <div className="w-[100vw] bg-slate-500 h-[100vh] flex flex-col text-center items-center justify-center">
      <h1 className="text-3xl font-bold">Todo List</h1>
      <ul className="mt-10 list-disc border-cyan-300 border-2 p-4">
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            className={index % 2 === 0 ? '' : 'bg-slate-600 p-1 rounded'}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
