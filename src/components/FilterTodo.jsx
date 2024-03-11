import React from 'react';

const FilterTodo = ({ setFilter, filter }) => {
  const buttonActive = (filterName) => {
    return `p-2 mx-1.5 bg-transparent border-2 border-cyan-950 rounded hover:shadow-lg transition-all ease-in-out duration-300 active:bg-slate-600 active:text-white ${
      filter === filterName ? 'bg-cyan-950 text-white' : ''
    }`;
  };

  return (
    <>
      <div className="my-4">
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
    </>
  );
};

export default FilterTodo;
