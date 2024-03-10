import React from 'react';

const TodoItem = ({ todo, className, toggleTodo }) => {
  return (
    <>
      <li
        className={`${className} text-start m-4 ${
          todo.done ? 'line-through italic text-slate-400' : ''
        }`}
        key={todo.id}
      >
        {todo.task}

        <fieldset>
          <input
            type="checkbox"
            id={`done-${todo.id}`}
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <label
            htmlFor={`done-${todo.id}`}
            className={`ml-2 ${
              todo.done
                ? 'text-slate-400 italic text-sm'
                : 'text-cyan-500 font-bold text-sm'
            }`}
          >
            {todo.done ? 'Done' : 'Not Done'}
          </label>
        </fieldset>
      </li>
    </>
  );
};

export default TodoItem;
