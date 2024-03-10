import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const sortedTodos = todos.sort((a, b) => a.done - b.done);
  return (
    <div>
      <h1 className="text-3xl font-bold">Todo List</h1>
      <ul className="mt-10 list-disc border-cyan-300 border-2 p-8 shadow-2xl rounded">
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
