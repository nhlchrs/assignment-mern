import React, { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import AddTodo from './AddTodo';
import Filter from './Filter';
import TodoList from './TodoList';

const FILTERS = {
  ALL: 'all',
  COMPLETED: 'completed',
  PENDING: 'pending',
};

export default function TodoApp() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState(FILTERS.ALL);
  const [hasFetched, setHasFetched] = useState(false); 

  // Fetch initial todos from API on first load
  useEffect(() => {
    if (todos.length === 0 && !hasFetched) {
      fetch('https://dummyjson.com/todos?limit=10')
        .then((res) => res.json())
        .then((data) => {
          const apiTodos = data.todos.map((t) => ({
            id: t.id + Date.now(),
            text: t.todo,
            completed: t.completed,
          }));
          setTodos(apiTodos);
          setHasFetched(true);
        })
        .catch((err) => console.error('API fetch error:', err));
    }
  }, [todos, hasFetched, setTodos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === FILTERS.COMPLETED) return todo.completed;
    if (filter === FILTERS.PENDING) return !todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <AddTodo onAdd={addTodo} />
      <Filter current={filter} onChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}
