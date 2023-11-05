import { ITask } from "../Components/FormTask";
import { api } from "./apiService";

export function taskService(){

    const services = {

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

        findAllTasks(): ITask[]{
            const tasksInString = localStorage.getItem('tasks');
            if(tasksInString){
                const tasks = JSON.parse(tasksInString);
                return tasks;
            }
            return []
        },

        toggleDoneTask(id: string){
            const tasksInString = localStorage.getItem('tasks');
            if(tasksInString){
                const tasks: ITask[] = JSON.parse(tasksInString);
                const task = tasks.find(t => t.id === id);
                if(task){
                    task.done = !task.done
                }
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
        },

        removeTask(id: string){
            const tasksInString = localStorage.getItem('tasks');
            if(tasksInString){
                const tasks: ITask[] = JSON.parse(tasksInString);
                if(tasks){
                    const task = tasks.find(t=> t.id === id)
                    if(task?.done){
                        return
                    }
                    const filteredTasks: ITask[] = tasks.filter(t => t.id !== id);
                    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
                }
            }
        },

        updateTask(id: string, text: string): string | undefined{
            const tasksInString = localStorage.getItem('tasks');
            if(tasksInString){
                const tasks: ITask[] = JSON.parse(tasksInString);
                const task = tasks.find(t => t.id === id);
                if(task && text){
                    task.task = text
                }
                localStorage.setItem('tasks', JSON.stringify(tasks));
                return task?.task
            }
        },

        signinUser(){

        },

        signupUSer(){

        }
    }

    return services;
}