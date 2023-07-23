import React, { useEffect, useState } from 'react'

function AddTask(props) {
  const [task, setTask] = useState('');

  const inputTask = (e) => {
    setTask(e.target.value);
  };

  const addNewTask = () => {
    props.handleAddTask(task);
    setTask('');
  };

  return (
    <div className="add_contents_container">
      <div className="task">
        <p>タスク：</p>
        <input type="text" onChange={inputTask} value={task} />
        <button className='add_btn' onClick={addNewTask}>追加</button>
      </div>
    </div>
  );
}

export default AddTask