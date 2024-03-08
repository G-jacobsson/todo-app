import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div className="w-[100vw] bg-slate-500 h-[100vh] flex flex-col text-center items-center justify-center">
      <h1 className="text-3xl font-bold">Todo List</h1>
      <ul className="mt-10 list-disc">
        {todos.map((todo, id) => (
          <li
            className="text-start m-4"
            key={id}
          >
            {todo.task}
            {/* <input
              type="checkbox"
              id={`done-${todo.id}`}
              checked={todo.done}
              readOnly
            />
            <label htmlFor={`done-${todo.id}`}>
              {todo.done ? 'Done' : 'Not Done'}
            </label> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
