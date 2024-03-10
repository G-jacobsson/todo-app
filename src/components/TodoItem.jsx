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
          {/* Task Text from the start */}
          <TbPointFilled />
          <span
            className={`flex-grow ${
              todo.done ? 'line-through italic text-slate-400' : ''
            }`}
          >
            {todo.task}
          </span>

          {/* Delete Icon aligned to the right */}
          <MdClose
            className="cursor-pointer text-lg opacity-100 ml-4" // Ensure visibility and spacing
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
          {todo.done ? 'Done' : 'Not Done'}
        </label>
      </fieldset>
    </>
  );
};

export default TodoItem;
