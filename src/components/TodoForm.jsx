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
          className="p-2 rounded shadow-2xl border-2 border-cyan-300 mb-4 mr-4 text-black w-full"
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white p-2 rounded shadow-2xl hover:bg-cyan-600 transition duration-300 ease-in-out cursor-pointer"
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default TodoForm;
