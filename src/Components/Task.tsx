import styled from "styled-components"
import { Priority } from '../data/selectData';
import { PiXLight, PiCircleLight, PiCheckCircleFill, PiCheckLight } from 'react-icons/pi'

interface TaskProps {
    text: string
    priority: Priority,
    done: boolean,
    id: string,
}


export default function Task({ text, priority, done, id }: TaskProps) {

    return (
        <ContainerTask done={done}>
            {   
                !done && (
                <DeleteTask >
                    <PiXLight />
                </DeleteTask>
                )
            }
            <Content>
                <DoneControl>
                    {done ? <PiCheckCircleFill color='#00ff00' /> : <PiCircleLight />}
                </DoneControl>
                <ContainerDetails>
                    <p>{text}</p>
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
    gap: 3px;
    top: 8px;
    right: 8px;
    cursor: pointer;
`