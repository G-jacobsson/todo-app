import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const sortedTodos = todos.sort((a, b) => a.done - b.done);
  return (
    <div className="mb-20">
      <h1 className="text-3xl font-bold">Todo List</h1>
      <ul className="p-8 mt-10 list-disc border-2 rounded shadow-2xl border-cyan-300">
        {sortedTodos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
