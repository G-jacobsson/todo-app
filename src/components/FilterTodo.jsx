import React from 'react';

const FilterTodo = ({ setFilter, filter }) => {
  const buttonActive = (filterName) => {
    return `p-2 mx-1.5 bg-transparent border-2 border-cyan-950 rounded transition-all ease-in-out duration-300 text-black ${
      filter === filterName ? 'bg-cyan-800 text-white' : 'hover:shadow-lg'
    }`;
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-cyan-500">Filter Todos</h2>
      <div className="mt-4">
        <button
          onClick={() => setFilter('all')}
          className={buttonActive('all')}
        >
          All
        </button>
        <button
          onClick={() => setFilter('done')}
          className={buttonActive('done')}
        >
          Done
        </button>
        <button
          onClick={() => setFilter('not done')}
          className={buttonActive('not done')}
        >
          Not Done
        </button>
      </div>
      <br />
      <div className="mb-8">
        <button
          onClick={() => setFilter('high')}
          className={buttonActive('high')}
        >
          High Priority
        </button>
        <button
          onClick={() => setFilter('medium')}
          className={buttonActive('medium')}
        >
          Medium Priority
        </button>
        <button
          onClick={() => setFilter('low')}
          className={buttonActive('low')}
        >
          Low Priority
        </button>
      </div>
    </>
  );
};

export default FilterTodo;
