import styled from "styled-components"
import { Priority } from '../data/selectData';
import { PiXLight, PiCircleLight, PiCheckCircleFill, PiCheckLight, PiNotePencilThin } from 'react-icons/pi'
import { apiService } from "../services/apiService"; 
import TaskDescription from "./TaskDescription";
import { useState } from "react";

interface TaskProps {
    text: string
    priority: Priority
    done: boolean
    id: string
    onChangeTask: () => void
}


export default function Task({ text, priority, done, id, onChangeTask }: TaskProps) {
    const { toggleDoneTask, removeTask: remove } = apiService()
    const [editable, setEditable] = useState<boolean>(false) 

    function doneTaskToggle() {
        toggleDoneTask(id)
        onChangeTask()
    }

    function removeTask(){
        remove(id)
        onChangeTask()
    }

    function onEditDisable(){
        setEditable(false)
    }

    return (
        <ContainerTask done={done}>
            {   
                !done && (
                <DeleteTask >
                    {!editable && <PiNotePencilThin onClick={() => setEditable(true)} />}
                    <PiXLight onClick={removeTask}/>
                </DeleteTask>
                )
            }
            <Content>
                <DoneControl>
                    {done ? <PiCheckCircleFill color='#00ff00' onClick={doneTaskToggle}/> : <PiCircleLight onClick={doneTaskToggle}/>}
                </DoneControl>
                <ContainerDetails>
                    <TaskDescription text={text} id={id} onChangeTask={onChangeTask} editable={editable} onEditDisable={onEditDisable}/>
                    <ContainerPriority priority={priority}>{priority}</ContainerPriority>
                </ContainerDetails>
            </Content>
            {done && <DoneAlert>Concluído <PiCheckLight color='#00ff00'/></DoneAlert>}
        </ContainerTask>
    )
}


interface ContainerTaskProps {
    done: boolean
}

const ContainerTask = styled.div<ContainerTaskProps>`
    position: relative;
    width: 100%;
    padding: 16px;
    max-width: 420px;
    box-sizing: border-box;
    background-color: ${props => props.done ? props.theme.done : props.theme.white};
    box-shadow: 0px 1px 1px #091E4240, 0px 0px 1px #091E424F;;
    border-radius: 8px;
`

const Content = styled.div`
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
`

const DoneControl = styled.div`
    cursor: pointer;
`

const DoneAlert = styled.span`
    display: flex;
    gap: 4px;
    position: absolute;
    bottom: 8px;
    right: 8px;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
`

const ContainerDetails = styled.div`
     display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`

interface ContainerPriorityProps {
    priority: Priority
}

const ContainerPriority = styled.p<ContainerPriorityProps>`
    width: fit-content;
    font-weight: 700;
    padding: 8px;
    font-size: 12px;
    border-radius: 4px;
    background-color: ${props => props.theme[props.priority]};
    color: ${props => props.theme.white};
`

const DeleteTask = styled.span`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    top: 8px;
    right: 8px;
    cursor: pointer;
`