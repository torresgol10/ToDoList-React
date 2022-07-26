import { useContext, useEffect } from 'react';
import { TasksContext } from 'contexts/TasksContext';

export function useTasks( {IdTaks = null} ){
    const { tasks, setTasks } = useContext(TasksContext);

    useEffect( () => {
        console.log('useTasks');
    }, [tasks, IdTaks]);

    return { tasks, setTasks };
}