import React from 'react';
import './styles/App.css';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
