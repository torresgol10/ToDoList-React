import React, { useState } from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import { useTasks } from "hooks/useTasks";

function FormNewTask() {
    const [task, setTask] = useState("");

    const { onSubmitNewTask } = useTasks();

    const onSubmit = (e) => {
        e.preventDefault();
        if ((task.length > 0)) {
            onSubmitNewTask({ task });
            setTask("");
        }
    };

    const handlerChange = (e) => {
        setTask(e.target.value);
    }


    return (
        <div className="FormNewTask">
            <form onSubmit={onSubmit}>
                <FormControl sx={{ display: "flex", justifyContent: "center", flexFlow: 'row' }} margin="dense" >
                    <TextField fullWidth id="standard-basic" label="Tarea" variant="standard" placeholder="Añade una tarea a tu lista" onChange={handlerChange} value={task} required />
                    <Button type="submit" variant="contained">Añadir</Button>
                </FormControl>
            </form>
        </div >
    )
}

export default React.memo(FormNewTask);