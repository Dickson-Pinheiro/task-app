import { PiCheckCircleFill, PiCircleLight } from "react-icons/pi";
import { Oval } from "react-loader-spinner";

interface ToggleDoneButtonProps {
    done: boolean
    isPendingDone: boolean
    undoneTask: () => void
    doneTask: () => void

}

export default function ToggleDoneButton({ done, undoneTask, isPendingDone, doneTask }: ToggleDoneButtonProps) {
    return (
        <>
            {done
                ?
                <PiCheckCircleFill color='#00ff00' onClick={undoneTask} data-testid="checked"/>
                :
                (
                    isPendingDone
                        ?
                        <Oval height={12} color="#000" secondaryColor="#fff" width={12} />
                        :
                        <PiCircleLight onClick={doneTask} data-testid="unchecked"/>
                )
            }
        </>
    )
}