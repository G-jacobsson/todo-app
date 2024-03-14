import React from 'react';
import TodoItem from './TodoItem';

const priorityValues = {
  high: 1,
  medium: 2,
  low: 3,
};

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const sortedTodos = todos.sort((a, b) => {
    if (a.done !== b.done) {
      return a.done ? 1 : -1;
    }
    return priorityValues[a.priority] - priorityValues[b.priority];
  });

  return (
    <div className="mb-20">
      <h1 className="text-3xl font-bold">Todo List</h1>
      {todos.length > 0 ? (
        <ul className="p-8 mt-10 list-disc border-2 rounded shadow-2xl border-cyan-300">
          {sortedTodos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-xl text-white">There's nothing to show here.</p>
      )}
    </div>
  );
};

export default TodoList;
