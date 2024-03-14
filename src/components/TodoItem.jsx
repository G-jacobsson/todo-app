import React from 'react';
import { MdClose } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';

const TodoItem = ({ todo, className, toggleTodo, deleteTodo }) => {
  return (
    <>
      <li
        className={`${className} group m-4 p-2 rounded-lg flex justify-between bg-slate-600 items-start border-cyan-950 border-2`}
      >
        <div className="flex items-center justify-between w-fit">
          <TbPointFilled />
          <span
            className={`flex-grow ${
              todo.done ? 'line-through italic text-slate-400' : ''
            } ${todo.priority === 'high' ? 'text-red-400' : ''} ${
              todo.priority === 'medium' ? 'text-yellow-500' : ''
            } ${todo.priority === 'low' ? 'text-green-500' : ''}`}
          >
            {todo.task} ({todo.priority} priority)
          </span>

          <MdClose
            className="ml-4 text-lg opacity-100 cursor-pointer"
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
