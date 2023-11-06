import "@testing-library/jest-dom"
import {  render } from "@testing-library/react"
import {describe, expect, test} from 'vitest'
import TaskDescription from "./TaskDescription"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

describe("<TaskDescription/>", () => {
    test("Deve renderizar corretamente a propriedade text", () => {
        const queryClient = new QueryClient()
        const { getByText } = render(
            <QueryClientProvider client={queryClient}>
                <TaskDescription editable={false} text="primeira task" id="1" onEditDisable={() => {}} priority="alta"/>
            </QueryClientProvider>
        )

        expect(getByText("primeira task")).toBeInTheDocument()
    })

    test("Deve renderizar o formulário quando estiver editável", () => {
        const queryClient = new QueryClient()
        const { getByTestId } = render(
            <QueryClientProvider client={queryClient}>
                <TaskDescription editable={true} text="primeira task" id="1" onEditDisable={() => {}} priority="alta"/>
            </QueryClientProvider>
        )

        const form = getByTestId("form-create-task")
        expect(form).toBeInTheDocument()
    })
})