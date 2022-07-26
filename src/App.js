import { useCallback, useState } from "react";

import ListTask from 'components/ListTask';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";

import FormLoadTask from "components/FormLoadTask";
import FormNewTask from 'components/FormNewTask';

import { TasksContextProvider } from "context/TaskContext";

import { uid } from 'uid';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const onClickDelete = (index) => {
    const newTasks = tasks.filter((task, i) => task.id !== index);
    setTasks(newTasks);
  };

  const onClickCompleted = useCallback((index) => {
    const newTasks = tasks.map((task, i) => {
      if (task.id === index) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(newTasks);
  }, [setTasks, tasks]);

  const onSubmitNewTask = useCallback(({ task }) => {
    setTasks([...tasks, { id: uid(4), text: task, completed: false }]);
  }, [setTasks, tasks]);

  return (
    <TasksContextProvider>
      <div className="App">
        <header className="App-header">
          <Typography variant="h6" component="span" mt={3} mb={3}>
            Id de tu lista: #12345
          </Typography>

          <FormLoadTask />
        </header>
        <Container maxWidth="sm">

          <Typography variant="h4" component="h1" mt={3} mb={3}>
            Bievenido a tu Lista de Tareas
          </Typography>

          <FormNewTask onSubmitNewTask={onSubmitNewTask} />

          <ListTask tasks={tasks} onClickDelete={onClickDelete} onClickCompleted={onClickCompleted} />
        </Container>
        <footer>

        </footer>
      </div>
    </TasksContextProvider>
  );
}

export default App;
