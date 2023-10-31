import styled from "styled-components"
import Header from "../Components/Header"
import FormTask, { ITask } from "../Components/FormTask"
import { useEffect, useState } from "react"
import { apiService } from "../services/apiService"
import Task from "../Components/Task"

export default function Painel(){
    const { findAllTasks } = apiService();
    const [tasks, setTasks] = useState<ITask[]>([])

    useEffect(() => {
        onChangeTask()
    }, [])


    function onChangeTask(){
        const newTasks = findAllTasks()
        setTasks(newTasks)
    }

    return(
        <ContainerPainel>
            <Header />
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