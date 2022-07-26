import React from "react";
import ListTask from 'components/ListTask';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";

import FormLoadTask from "components/FormLoadTask";
import FormNewTask from 'components/FormNewTask';

import { TasksContextProvider } from "context/TasksContext";
import Grid from '@mui/material/Grid';

import './App.css';
import IdUser from "components/IdUser";

function App() {

  return (
    <TasksContextProvider>
      <div className="App">
        <Grid className="App-header" container direction="row" justifyContent="space-between" alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="span" mt={3} mb={3}>
              Id de tu lista: <IdUser />
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormLoadTask />
          </Grid>
        </Grid>
        <Container maxWidth="sm">

          <Typography variant="h4" component="h1" mt={3} mb={3}>
            Bievenido a tu Lista de Tareas
          </Typography>

          <FormNewTask />

          <ListTask />
        </Container>
        <footer>

        </footer>
      </div>
    </TasksContextProvider>
  );
}

export default App;
