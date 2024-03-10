import React from 'react';

const TodoForm = ({ todos }) => {
  return (
    <>
      <form className="mb-16">
        <input
          type="text"
          id="task"
          name="task"
          placeholder="Add a new todo..."
          className="p-2 rounded shadow-2xl border-2 border-cyan-300 mb-4 mr-4 text-black w-full"
        />
        <button className="bg-cyan-500 text-white p-2 rounded shadow-2xl hover:bg-cyan-600 transition duration-300 ease-in-out cursor-pointer">
          Add Todo
        </button>
      </form>
    </>
  );
};

export default TodoForm;
