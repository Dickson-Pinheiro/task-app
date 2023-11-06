import "@testing-library/jest-dom"
import { fireEvent, render } from "@testing-library/react"
import {describe, expect, test, vi} from 'vitest'
import TaskEditButton from "./TaskEditButton"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

describe("<TaskEditButton />", () => {
    test("deve renderizar corretamente", () => {
        const queryClient = new QueryClient()
        const {getByTestId} = render(
            <QueryClientProvider client={queryClient}>
                <TaskEditButton editable={false} changeEditableTask={() => {}}/>
            </QueryClientProvider>
        )

        expect(getByTestId("edit-task-button")).toBeInTheDocument()
    })

    test("Deve ser possível clicar quando o editable for false", () => {
        const changeEditableTaskSpy = vi.fn()
        const queryClient = new QueryClient()
        const {getByTestId} = render(
            <QueryClientProvider client={queryClient}>
                <TaskEditButton editable={false} changeEditableTask={changeEditableTaskSpy}/>
            </QueryClientProvider>
        )

        const button = getByTestId("edit-task-button")
        
        fireEvent.click(button)
        expect(changeEditableTaskSpy).toBeCalled()
    })
    
    test("Deve retornar um elemento dom vazio  quando editable for true", () =>{
        const changeEditableTaskSpy = vi.fn()
        const queryClient = new QueryClient()
        const { queryByTestId } = render(
            <QueryClientProvider client={queryClient}>
                <TaskEditButton editable={true} changeEditableTask={changeEditableTaskSpy}/>
            </QueryClientProvider>
        )
        expect(queryByTestId("edit-task-button")).toBeNull()
    })
})