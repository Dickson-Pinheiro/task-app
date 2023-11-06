import { ITask } from "../Components/FormTask/FormTask";
import { Priority } from "../data/selectData";
import { api } from "./apiService";
import {AxiosPromise} from 'axios'

export interface ICreateTask {
    task: string,
    priority: Priority
}

interface IUpdateTask {
    task: string,
    priority: Priority,
    id: string
}

export function taskService(){
    
    const services = {

        async createTask(data: ICreateTask){
            return await api.post('/tasks', data)
        },

        async findAllTasks(): AxiosPromise<ITask[]>{
            return await api.get('/tasks')
        },

        async doneTask(id: string){
            return await api.put(`/tasks/done/${id}`)
        },

        async undoneTask(id: string){
            return await api.put(`/tasks/undone/${id}`)
        },

        async removeTask(id: string){
            return await api.delete(`/tasks/${id}`)
        },

        async updateTask(data: IUpdateTask) {
            return await api.put(`/tasks/${data.id}`, {task: data.task, priority: data.priority})
        },
    }

    return services;
}