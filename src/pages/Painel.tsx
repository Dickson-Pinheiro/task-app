import styled from "styled-components"
import Header from "../Components/Header"
import FormTask, { ITask } from "../Components/FormTask"
import { useEffect, useState } from "react"
import { taskService } from "../services/taskService"
import Task from "../Components/Task"
import { Priority, PriorityOption, Status } from "../data/selectData"

export default function Painel(){
    const { findAllTasks } = taskService();
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [priorityFilter, setPriorityFilter] = useState<Priority[]>(['alta', 'baixa', 'media', 'urgente'])
    const [statusFilter, setStatusFilter] = useState<Status>('todos');

    useEffect(() => {
        onChangeTask()
    }, [priorityFilter, statusFilter])

    function onChangeTask(){
        const newTasks = findAllTasks()
        if(newTasks){
            const sortedTasks = newTasks.sort((a: ITask, b: ITask) => a.priorityValue - b.priorityValue)
            let filteredTasks = getTaskByStatus(statusFilter, sortedTasks)
            if(filteredTasks){
                filteredTasks = getTaskByPriority(priorityFilter, filteredTasks);
            }
            setTasks(filteredTasks)
        }
    }

    function getTaskByPriority(priorities: Priority[], tasks: ITask[]){
        if(priorities.length === 0){
            return tasks;
        }
        return tasks.filter(t => priorityFilter.includes(t.priority))
    }

    function getTaskByStatus(status: Status, tasks: ITask[]){
        switch (status) {
            case 'andamento':
                return tasks.filter(t => !t.done)
            case 'concluído':
                return tasks.filter(t => t.done)
            case 'todos':
                return tasks;
            default:
                return [];
        }
    }

    function changePriorityFilter(e: readonly PriorityOption[]){
        setPriorityFilter(e.map(i => i.value));
    }

    function changeStatusFilter(status: Status){
        setStatusFilter(status);
    }
    

    return(
        <ContainerPainel>
            <Header changePriorityFilter={changePriorityFilter} changeStatusFilter={changeStatusFilter}/>
            <FormTask onChangeTask={onChangeTask}/>
            <PainelContent>
                <ContainerTask>
                    {tasks?.map(task => <Task priority={task.priority} text={task.task} done={task.done} id={task.id} key={task.id} onChangeTask={onChangeTask}></Task>)}
                </ContainerTask>
            </PainelContent>
        </ContainerPainel>
    )
}

const ContainerPainel = styled.div`
    box-sizing: border-box;
`

const PainelContent = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
`

const ContainerTask = styled.div`
    width: 100%;
    max-width: 548px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    box-sizing: border-box;
`