import React from "react";
import NewTask from "./NewTask";
import TaskContext from "../context/Context-Task";
import { useContext } from "react";

export default function TaskList() {
  const { informations } = useContext(TaskContext);
  return (
    <div>
      {informations.length !== 0 ? (
        <h3 className="title-to-created">Created</h3>
      ) : (
        <h5 className="title-to-created">Did not create anything</h5>
      )}

      <div className="task-list container">
        {informations.map((data, index) => {
          return <NewTask key={index} data={data} />;
        })}
      </div>
    </div>
  );
}
