import { useContext, useEffect, useCallback } from 'react';
import TasksContext from 'context/TasksContext';
import { uid } from 'uid';
import sendTasks from 'service/sendTasks';

export function useTasks() {
    const { tasks, setTasks, id, setId } = useContext(TasksContext);

    const onClickDelete = (index) => {
        const newTasks = tasks.filter((task, i) => task.id !== index);
        setTasks(newTasks);
        sendTasks({tasks: newTasks, id});
    };
    
    const onClickCompleted = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (task.id === index) {
                task.completed = !task.completed;
            }
            return task;
        });

        setTasks(newTasks);
        sendTasks({tasks: newTasks, id});
    };

    const onSubmitNewTask = ({ task }) => {
        const newTasks = [...tasks, { id: uid(5), text: task, completed: false }];
        setTasks(newTasks);
        sendTasks({tasks: newTasks, id});
    };

    

    return { tasks, setTasks, onClickDelete, onClickCompleted, onSubmitNewTask, id, setId };
}