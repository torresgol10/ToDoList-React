import Task from "components/Task";
import List from '@mui/material/List';
import { useTasks } from "hooks/useTasks";

import "./style.css";

function ListTask() {
    const {tasks, onClickCompleted, onClickDelete} = useTasks();

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className="ListTask">
            {tasks.map((task) => (
                <Task key={task.id} task={task} onClickDelete={onClickDelete} onClickCompleted={onClickCompleted} />
            ))}
        </List>
    )
}

export default ListTask;