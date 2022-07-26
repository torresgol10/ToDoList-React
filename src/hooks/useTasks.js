import { useContext, useEffect, useCallback } from 'react';
import TasksContext from 'context/TasksContext';
import { uid } from 'uid';

export function useTasks({ IdTaks } = {}) {
    const { tasks, setTasks } = useContext(TasksContext);

    useEffect(() => {
        console.log('useTasks');
    }, [tasks]);


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


    return { tasks, setTasks, onClickDelete, onClickCompleted, onSubmitNewTask };
}