import React, { useState } from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../taskList/TaskList';

const EmployeeDashboard = (props) => {
  const [tasks, setTasks] = useState(props.data.tasks);

  const updateTaskStatus = (taskId, status) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      )
    );
  };

  return (
    <>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={{ ...props.data, tasks }} />
      <TaskList data={{ ...props.data, tasks }} updateTaskStatus={updateTaskStatus} />
    </>
  );
};

export default EmployeeDashboard;
