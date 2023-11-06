import { useState } from "react";
import styled from "styled-components";
import { Priority } from "../../../data/selectData";
import { useUpdateTask } from "../../../hooks/useUpdateTask";
import TaskDescriptionForm from "./TaskDescriptionForm/TaskDescriptionForm";

interface TaskDescriptionProps {
    text: string
    id: string
    editable: boolean
    priority: Priority,
    onEditDisable: () => void
}


export default function TaskDescription({ text, priority, id, editable, onEditDisable }: TaskDescriptionProps) {
    ;
    const [editValue, setEditValue] = useState<string>(text);
    const { mutate } = useUpdateTask()

    async function editTaskValueSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (editValue === '') {
            setEditValue(text)
            onEditDisable()
            return
        }
        mutate({ task: editValue, priority, id });
        onEditDisable()
    }

    function editTaskValueBlur() {
        if (editValue === '') {
            setEditValue(text)
            onEditDisable()
            return
        }
        mutate({ task: editValue, priority, id });
        onEditDisable()
    }

    function editValueState(value: string) {
        setEditValue(value)
    }

    return (
        <ContainerTaskDescription>
            {!editable && <ContainerText data-testid="text-description">{editValue}</ContainerText>}
            {editable && (
                <TaskDescriptionForm
                    editTaskValueBlur={editTaskValueBlur}
                    editTaskValueSubmit={editTaskValueSubmit}
                    editValue={editValue}
                    editValueState={editValueState}
                />
            )
            }
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
    word-wrap: break-word;
`