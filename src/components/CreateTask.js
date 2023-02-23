import React, { useState } from "react";
import TaskContext from "../context/Context-Task";
import { useContext } from "react";

export default function CreateTask() {
  const { createdTask } = useContext(TaskContext);
  const [namesurname, setNamesurname] = useState("");
  const [adress, setAdress] = useState("");
  const handleNamesurname = (event) => {
    setNamesurname(event.target.value);
  };
  const handleAdress = (event) => {
    setAdress(event.target.value);
  };
  const createSubmit = (event) => {
    event.preventDefault();
    createdTask(namesurname, adress);
    setNamesurname("");
    setAdress("");
  };
  return (
    <div className="create-task container">
      <h2 className="create-title">User Create Screen</h2>
      <form action="">
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name Surname
          </label>
          <input
            onChange={handleNamesurname}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={namesurname}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Adress
          </label>
          <textarea
            onChange={handleAdress}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            value={adress}
          />
        </div>
        <div className="mb-4">
          <button onClick={createSubmit} className="create-btn">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
