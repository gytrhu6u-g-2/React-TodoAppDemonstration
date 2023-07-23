import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Results from './components/Results';
import Title from './components/Title';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((task, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Todoアプリ</h1>
      <AddTask handleAddTask={handleAddTask} />
      <Results tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;