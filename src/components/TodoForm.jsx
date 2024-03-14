import React, { useState } from 'react';
import {
  PRIORITY_LOW,
  PRIORITY_MEDIUM,
  PRIORITY_HIGH,
} from '../utils/constants.js';

const TodoForm = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState(PRIORITY_LOW);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(newTodo, priority);
    setNewTodo('');
    setPriority(PRIORITY_LOW);
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
        <label
          htmlFor="priority"
          className="mr-4 text-white"
        >
          {' '}
          Priority:{' '}
        </label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 mr-4 text-black border-2 rounded shadow-2xl border-cyan-300"
        >
          <option value={PRIORITY_LOW}>Low</option>
          <option value={PRIORITY_MEDIUM}>Medium</option>
          <option value={PRIORITY_HIGH}>High</option>
        </select>
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
