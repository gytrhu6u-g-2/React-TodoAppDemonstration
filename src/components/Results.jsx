// import { taskCancelled } from '@reduxjs/toolkit/query/react';
import React, { useState } from 'react'

function Results(props) {
  const { tasks, handleDeleteTask } = props;

  const deleteTask = (index) => {
    handleDeleteTask(index);
  };

  const taskLists = tasks.map((task, index) => (
    <div className="result" key={index}>
      <p>{task}</p>
      <button onClick={() => deleteTask(index)}>削除</button>
    </div>
  ));

  return (
    <div className="result_container">
      {taskLists}
    </div>
  );
}


export default Results