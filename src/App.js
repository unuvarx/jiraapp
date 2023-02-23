// to start this app , you should write $ npm start in a terminal and write $ json-server --watch api/db.json --port 3001 in the different terminal
import "./App.css";
import CreateTask from "./components/CreateTask";
import "bootstrap/dist/css/bootstrap.css";
import TaskList from "./components/TaskList";
import React, { useContext, useEffect } from "react";
import TaskContext from "./context/Context-Task";

function App() {
  const { fetchTasks } = useContext(TaskContext);
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      <CreateTask />
      <TaskList />
    </div>
  );
}
export default App;
