import React, { useState } from 'react';

const TodoForm = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(newTodo);
    setNewTodo('');
  };

  return (
    <>
      <form
        className="mb-16"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="w-full p-2 mb-4 mr-4 text-black border-2 rounded shadow-2xl border-cyan-300"
        />
        <button
          type="submit"
          className="p-2 text-white transition duration-300 ease-in-out border-2 rounded shadow-2xl cursor-pointer bg-cyan-500 border-cyan-950 hover:bg-cyan-600"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default TodoForm;
