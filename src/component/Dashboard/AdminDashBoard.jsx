import React from 'react';
import Header from '../other/header';
import Createtask from '../other/Createtask';
import AllTask from '../other/AllTask';

const AdminDashBoard = (props) => {
  return (
    <div className="h-full w-full p-10 bg-[#121212] text-white">
      <Header changeUser={props.changeUser} />
      <Createtask />
      <AllTask />  {/* Ensure AllTask component works properly */}
    </div>
  );
};

export default AdminDashBoard;
