import { ITask } from "../Components/FormTask";

export function apiService(){

    const api = {
        createTask(task: ITask){
            const tasksInString = localStorage.getItem('tasks');
            if(!tasksInString){
                const tasks: ITask[] = [task]
                localStorage.setItem('tasks', JSON.stringify(tasks))
            } else {
                const newTasks: ITask[] = JSON.parse(tasksInString);
                newTasks.push(task)
                localStorage.setItem('tasks', JSON.stringify(newTasks));
            }
        },

    }
    return api;
}