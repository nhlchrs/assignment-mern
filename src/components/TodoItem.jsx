import React from 'react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <span
        className={todo.completed ? 'completed' : ''}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
