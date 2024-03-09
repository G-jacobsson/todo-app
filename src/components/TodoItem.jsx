import React from 'react';

const TodoItem = ({ todo, className }) => {
  return (
    <>
      <li
        className={`${className} text-start m-4 ${
          todo.done ? 'line-through italic' : ''
        }`}
        key={todo.id}
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
    </>
  );
};

export default TodoItem;
