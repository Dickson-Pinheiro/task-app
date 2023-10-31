import { useState } from "react";
import styled from "styled-components";
import { apiService } from "../services/apiService";
import {PiNotePencilThin} from 'react-icons/pi'

interface TaskDescriptionProps {
    text: string
    id: string
    onChangeTask: Function
}


export default function TaskDescription({ text, id, onChangeTask }: TaskDescriptionProps) {
    const [editable, setEditable] = useState<boolean>(false);
    const [editValue, setEditValue] = useState<string>(text);
    const { updateTask } = apiService()

    function editTaskValueSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const newText = updateTask(id, editValue);
        setEditValue(newText as string)
        onChangeTask()
        setEditable(false)
    }

    function editTaskValueBlur(){
        const newText = updateTask(id, editValue);
        setEditValue(newText as string)
        onChangeTask()
        setEditable(false)
    }

    return (
        <ContainerTaskDescription>
            {!editable && <ContainerText>{editValue}</ContainerText>}
            {editable && (
                <EditForm onSubmit={editTaskValueSubmit}>
                    <input type='text' value={editValue} onChange={(e) => setEditValue(e.target.value)} autoFocus onBlur={editTaskValueBlur} />
                </EditForm>
            )
            }
            {!editable && <PiNotePencilThin onClick={() => setEditable(true)}/>}
        </ContainerTaskDescription>
    )
}

const ContainerTaskDescription = styled.div`
    display: flex;
    gap: 8px;
    padding-right: 25px;
    box-sizing: border-box;
    max-width: 320px;
    width: 100%;
    svg {
        cursor: pointer;
    }
`

const ContainerText = styled.p`
    max-width: 280px;
    width: 100%;
`
const EditForm = styled.form`
    width: 100%;
    input {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        padding-left: 10px;
        padding-right: 10px;
    }
`