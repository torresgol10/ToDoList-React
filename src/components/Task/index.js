import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Task({ task, onClickDelete, onClickCompleted }) {
    const classNameCustom = task.completed ? "ListTask-item completed" : "ListTask-item";

    return (
        <ListItem key={task.id} disablePadding divider>

            <ListItemButton dense>
                <IconButton aria-label="completed" size="large" onClick={e => { onClickCompleted(task.id) }} color="success">
                    <CheckCircleOutlineIcon />
                </IconButton>

                <ListItemText primary={task.text} className={classNameCustom} />

                <IconButton aria-label="delete" size="large" onClick={e => { onClickDelete(task.id) }} color="error">
                    <DeleteIcon />
                </IconButton>
            </ListItemButton>
        </ListItem>
    );
}

export default React.memo(Task)