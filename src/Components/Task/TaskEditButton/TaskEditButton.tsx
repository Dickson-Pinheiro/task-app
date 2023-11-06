import { PiNotePencilThin } from "react-icons/pi"


interface TaskEditButtonProps {
    editable: boolean,
    changeEditableTask: () => void
}

export default function TaskEditButton({ editable, changeEditableTask }: TaskEditButtonProps){
    return(
        <>
            {!editable && <PiNotePencilThin onClick={changeEditableTask} data-testid="edit-task-button"/>} 
        </>
    )
}