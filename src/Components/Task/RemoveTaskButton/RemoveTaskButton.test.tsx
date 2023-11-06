import "@testing-library/jest-dom"
import { fireEvent, render } from "@testing-library/react"
import {describe, expect, test, vi} from 'vitest'
import RemoveTaskButton from "./RemoveTaskButton"


describe("<RemoveTaskButton />", () => {
    test("Deve renderizar corretamente", () => {
        const { getByTestId } = render(<RemoveTaskButton isPendingRemove={false} removeTask={() => {}}/>)
        
        expect(getByTestId("remove-task-button")).toBeInTheDocument()
    })
    test("Deve ser possível clicar quando não estiver pendente", () => {
        const removeTaskSpy = vi.fn()
        const { getByTestId } = render(<RemoveTaskButton isPendingRemove={false} removeTask={removeTaskSpy}/>)
        const button = getByTestId("remove-task-button")

        fireEvent.click(button)
        expect(removeTaskSpy).toBeCalled()
    })
    test("Botão não deve ser renderizado quando estiver pendente", () => {
        const { queryByTestId } = render(<RemoveTaskButton isPendingRemove={true} removeTask={() => {}}/>)
        expect(queryByTestId("remove-task-button")).toBeNull()  
    })
    test("Loading deve ser realizado quando estiver pendente", () => {
        const {getByTestId} = render(<RemoveTaskButton isPendingRemove={true} removeTask={() => {}}/>)
        expect(getByTestId("oval-svg")).toBeInTheDocument()
    })
    test("loading não deve ser renderizado quando não estiver pendente", () => {
        const {queryByTestId} = render(<RemoveTaskButton isPendingRemove={false} removeTask={() => {}}/>)
        expect(queryByTestId("oval-svg")).toBeNull()  
    })
})