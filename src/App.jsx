import React, { useContext, useEffect, useState } from "react";
import Login from "./component/Auth/Login";
import AdminDashBoard from "./component/Dashboard/AdminDashBoard";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authData] = useContext(AuthContext);  // Extracting the context data

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedInUserData(userData.data || null);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
    setLoading(false);  // Mark loading as false after checking localStorage
  }, []);  // Runs only on component mount

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const adminData = { role: "admin" };
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
      return;
    }

    if (!authData?.employees) {
      alert("No employee data available");
      return;
    }

    const employee = authData.employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      const employeeData = { role: "employee", data: employee };
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
    } else {
      alert("Invalid Credentials");
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem("loggedInUser");
  };

  if (loading) return <div>Loading...</div>;  // Display a loading state during the initial render

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashBoard changeUser={setUser} handleLogout={handleLogout} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} handleLogout={handleLogout} />
      ) : null}
    </>
  );
};

export default App;
