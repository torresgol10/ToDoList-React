import Task from "components/Task";
import List from '@mui/material/List';

import "./style.css";

function ListTask({ tasks, onClickDelete, onClickCompleted }) {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className="ListTask">
            {tasks.map((task) => (
                <Task key={task.id} task={task} onClickDelete={onClickDelete} onClickCompleted={onClickCompleted} />
            ))}
        </List>
    )
}

export default ListTask;