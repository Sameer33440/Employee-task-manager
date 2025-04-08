import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Createtask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Create a new task object
    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    // Get the latest employees list from userData
    const updatedEmployees = userData.employees.map((employee) => {
      if (employee.firstName === assignTo) {
        // If the assigned employee is found, add the new task to their list
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskCounts: {
            ...employee.taskCounts,
            newTask: employee.taskCounts.newTask + 1, // Increment new task count
          },
        };
      }
      return employee;
    });

    // Update the global state
    setUserData({ employees: updatedEmployees });

    // Update local storage
    localStorage.setItem('employees', JSON.stringify({ employees: updatedEmployees }));

    // Reset input fields
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
  };

  return (
    <div className="p-6 bg-[#1f1f1f] mt-7 rounded-lg shadow-lg">
      <form onSubmit={submitHandler} className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-6">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <h3 className="text-sm text-gray-400 mb-2">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-md bg-transparent border border-gray-600 text-white"
              type="text"
              placeholder="Task title"
              required
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-400 mb-2">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="py-2 px-4 w-full rounded-md bg-transparent border border-gray-600 text-white"
              type="date"
              required
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-400 mb-2">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-md bg-transparent border border-gray-600 text-white"
              type="text"
              placeholder="Employee Name"
              required
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-400 mb-2">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-4 w-full rounded-md bg-transparent border border-gray-600 text-white"
              type="text"
              placeholder="Task category"
              required
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/5 flex flex-col items-start space-y-4">
          <h3 className="text-sm text-gray-400 mb-2">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded-md bg-transparent border border-gray-600 text-white"
            placeholder="Enter task description..."
            required
          ></textarea>
          <button
            className="bg-emerald-500 py-3 px-5 rounded-md text-sm mt-4 w-full hover:bg-emerald-600 transition duration-300"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createtask;
