import React, { useEffect, useState } from "react";
import { uid } from 'uid';
import getTaskById from 'service/getTaskById';

const Context = React.createContext({});

export function TasksContextProvider({ children }) {
  const [tasks, setTasks] = useState([])
  const [id, setId] = useState(() => {
    const id = localStorage.getItem('idList');
    if (id) {
      return id;
    } else {
      const id = uid(5);
      localStorage.setItem('idList', id);
      return id;
    }
  });

  useEffect(() => {
    getTaskById(id).then(newtasks => {
      setTasks(newtasks);
      localStorage.setItem('idList', id);
    });

  }, [id]);

  return (
    <Context.Provider value={{ tasks, setTasks, id, setId }}>{children}</Context.Provider>
  );
}

export default Context;
