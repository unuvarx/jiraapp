import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

const TaskContext = createContext();
function Provider({ children }) {
  const [informations, setInformations] = useState([]);
  const createdTask = async (namesurname, adress) => {
    const postApi = await axios.post("http://localhost:3001/tasks", {
      namesurname: namesurname,
      adress: adress,
    });
    console.log(postApi);
    const createdTask = [...informations, postApi.data];
    setInformations(createdTask);
  };
  const fetchTasks = async () => {
    const getApi = await axios.get("http://localhost:3001/tasks");
    setInformations(getApi.data);
  };

  const handleDeleteById = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const deletedList = [];
    informations.map((data) => {
      if (data.id !== id) {
        deletedList.push(data);
      }
    });
    setInformations(deletedList);
  };

  const handleUpdatedById = async (namesurname, adress, id) => {
    informations.map((data) => {
      if (data.id === id) {
        data.namesurname = namesurname;
        data.adress = adress;
      }
    });
    await axios.put(`http://localhost:3001/tasks/${id}`, {
      namesurname: namesurname,
      adress: adress,
    });
  };

  const sharedValuesAndMethods = {
    informations,
    createdTask,
    fetchTasks,
    handleDeleteById,
    handleUpdatedById,
  };
  return (
    <TaskContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TaskContext.Provider>
  );
}

export { Provider };
export default TaskContext;
