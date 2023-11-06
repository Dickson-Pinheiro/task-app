import styled from "styled-components"
import { Priority } from '../../data/selectData';
import { PiXLight, PiCircleLight, PiCheckCircleFill, PiCheckLight, PiNotePencilThin } from 'react-icons/pi'
import { useDoneTask } from "../../hooks/useDoneTask";
import TaskDescription from "./TaskDescription/TaskDescription";
import { useState } from "react";
import { useUndoneTask } from "../../hooks/useUndoneTask";
import { useRemoveTask } from "../../hooks/useRemoveTask";
import { Oval } from "react-loader-spinner";
import TaskEditButton from "./TaskEditButton/TaskEditButton";
import RemoveTaskButton from "./RemoveTaskButton/RemoveTaskButton";

interface TaskProps {
    text: string
    priority: Priority
    done: boolean
    id: string
}


export default function Task({ text, priority, done, id }: TaskProps) {
    const [editable, setEditable] = useState<boolean>(false) 
    const { mutate: doneTaskMutate, isPending: isPendingDone} = useDoneTask()
    const {mutate: undoneTaskMutate} = useUndoneTask()
    const { mutate: removeTaskMutate, isPending: isPendingRemove } = useRemoveTask()

    function doneTask() {
        doneTaskMutate(id)
    }

    function undoneTask(){
        undoneTaskMutate(id)
    }

    function removeTask(){
        removeTaskMutate(id)
    }

    function onEditDisable(){
        setEditable(false)
    }

    function changeEditableTask(){
        setEditable(true)
    }

    return (
        <ContainerTask done={done}>
            {   
                !done && (
                <EditAndDeleteControl >
                    <TaskEditButton editable={editable} changeEditableTask={changeEditableTask}/>
                    <RemoveTaskButton isPendingRemove={isPendingDone} removeTask={removeTask}/>
                </EditAndDeleteControl>
                )
            }
            <Content>
                <DoneControl>
                    {done ? <PiCheckCircleFill color='#00ff00' onClick={undoneTask}/> : (isPendingDone ? <Oval height={12} color="#000" secondaryColor="#fff" width={12}  /> :  <PiCircleLight onClick={doneTask}/>)}
                </DoneControl>
                <ContainerDetails>
                    <TaskDescription text={text} id={id}  editable={editable} priority={priority} onEditDisable={onEditDisable}/>
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

const EditAndDeleteControl = styled.span`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    top: 8px;
    right: 8px;
    cursor: pointer;
`