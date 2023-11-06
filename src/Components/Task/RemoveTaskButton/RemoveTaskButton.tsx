import { PiXLight } from "react-icons/pi";
import { Oval } from "react-loader-spinner";

interface RemoveTaskButtonProps {
    isPendingRemove: boolean
    removeTask: () => void
}

export default function RemoveTaskButton({isPendingRemove, removeTask}: RemoveTaskButtonProps){
    return(
        <>
            {
            isPendingRemove 
                ? 
            <Oval height={12} color="#000" secondaryColor="#fff" width={12} /> 
                :
             <PiXLight onClick={removeTask} data-testid="remove-task-button"/>
             }
        </>
    )
}