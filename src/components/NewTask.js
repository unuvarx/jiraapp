import React, { useState } from "react";
import TaskContext from "../context/Context-Task";
import { useContext } from "react";

export default function NewTask({ data }) {
  const { handleDeleteById, handleUpdatedById } = useContext(TaskContext);
  const handleDelete = (event) => {
    event.preventDefault();
    handleDeleteById(data.id);
  };
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = (event) => {
    event.preventDefault();
    setIsEdit(!isEdit);
  };
  const [updatedNamesurname, setUpdatedNamesurname] = useState(
    data.namesurname
  );
  const [updatedAdress, setUpdatedAdress] = useState(data.adress);
  const handleUpdatedNamesurname = (event) => {
    setUpdatedNamesurname(event.target.value);
  };
  const handleUpdatedAdress = (event) => {
    setUpdatedAdress(event.target.value);
  };
  const handleUpdateBtnClick = (event) => {
    event.preventDefault();
    setIsEdit(!isEdit);
    handleUpdatedById(updatedNamesurname, updatedAdress, data.id);
  };
  return (
    <div className="new-task">
      {isEdit === false ? (
        <form>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Name Surname
            </label>
            <input
              onChange={(event) => event.preventDefault()}
              value={data.namesurname}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Adress
            </label>
            <textarea
              onChange={(event) => event.preventDefault()}
              value={data.adress}
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <div className="mb-4">
            <button onClick={handleDelete} className="new-task-delete-btn">
              Delete
            </button>
            <button onClick={handleEdit} className="new-task-edit-btn">
              Edit
            </button>
          </div>
        </form>
      ) : (
        <form className="updated-form">
          <h5>Update Screen</h5>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Name Surname
            </label>
            <input
              onChange={handleUpdatedNamesurname}
              value={updatedNamesurname}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Adress
            </label>
            <textarea
              onChange={handleUpdatedAdress}
              value={updatedAdress}
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <div className="mb-4 updated-btn">
            <button
              onClick={handleUpdateBtnClick}
              className="new-task-updated-btn"
            >
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
