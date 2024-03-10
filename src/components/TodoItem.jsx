import React from 'react';
import { MdClose } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';

const TodoItem = ({ todo, className, toggleTodo, deleteTodo }) => {
  return (
    <>
      <li
        className={`${className} group m-4 p-2 rounded-lg flex justify-between items-start border-cyan-950 border-2`}
      >
        <div className="w-fit flex justify-between items-center">
          <TbPointFilled />
          <span
            className={`flex-grow ${
              todo.done ? 'line-through italic text-slate-400' : ''
            }`}
          >
            {todo.task}
          </span>

          <MdClose
            className="cursor-pointer text-lg opacity-100 ml-4"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      </li>

      <fieldset className="flex items-center mt-2">
        <input
          type="checkbox"
          id={`done-${todo.id}`}
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2"
        />
        <label
          htmlFor={`done-${todo.id}`}
          className={`${
            todo.done
              ? 'text-slate-400 italic text-sm'
              : 'text-cyan-500 font-bold text-sm'
          }`}
        >
          {todo.done ? 'Done' : 'Done'}
        </label>
      </fieldset>
    </>
  );
};

export default TodoItem;
