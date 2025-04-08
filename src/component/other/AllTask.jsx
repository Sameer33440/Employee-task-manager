import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 w-full overflow-hidden"> {/* Overflow hidden added */}
      {/* Header (Static) */}
      <div className="bg-red-500 text-white py-3 px-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center font-semibold rounded">
        <h2 className="px-2">Employee Name</h2>
        <h3 className="px-2">New Tasks</h3>
        <h5 className="px-2">Active Tasks</h5>
        <h5 className="px-2 hidden md:block">Completed</h5>
        <h5 className="px-2 hidden md:block">Failed</h5>
      </div>

      {/* Task List (Responsive & Hover Effect) */}
      <div className="grid gap-2 mt-3">
        {userData.employees?.map((elem, idx) => (
          <div
          
            key={idx}
            className="bg-gray-800 text-white p-3 rounded-lg shadow-md border border-emerald-500 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center items-center
            transition-all duration-300 hover:shadow-emerald-500 hover:shadow-lg hover:scale-[1.02] will-change-transform"
          >
            <h2 className="text-lg font-semibold text-yellow-300 px-2">{elem.firstName}</h2>
            <h3 className="text-blue-400 px-2">{elem.taskCounts.newTask}</h3>
            <h5 className="text-yellow-400 px-2">{elem.taskCounts.active}</h5>
            <h5 className="text-green-400 px-2 hidden md:block">{elem.taskCounts.completed}</h5>
            <h5 className="text-red-500 px-2 hidden md:block">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
