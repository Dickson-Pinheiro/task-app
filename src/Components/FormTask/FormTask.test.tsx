import "@testing-library/jest-dom"
import { fireEvent, render } from "@testing-library/react"
import {describe, expect, test, vi} from 'vitest'
import FormTask from "./FormTask"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

describe("<FormTask />", () => {
    test("Deve renderizar corretamente", () => {
        const queryClient = new QueryClient()
        const {getByText} = render(
            <QueryClientProvider client={queryClient}>
                <FormTask onSubmitForm={() => {}} isPending={false}/>
            </QueryClientProvider>
        )
        expect(getByText("Criar")).toBeInTheDocument()
    })
    test("Deve ser possível emitir evento de submit quando o input estiver preenchido.", () => {
        const queryClient = new QueryClient()
        const onSubmitFormSpy = vi.fn()
        const { getByTestId } = render(
            <QueryClientProvider client={queryClient}>
                <FormTask onSubmitForm={onSubmitFormSpy} isPending={false}/>
            </QueryClientProvider>
        )

        const input = getByTestId("input-create-task")
        fireEvent.change(input, {target: {value: "Primeira task"}})

        const form = getByTestId("form-create-task")
        fireEvent.submit(form)

        expect(onSubmitFormSpy).toBeCalled()

    })
    test("Deve ser possível submeter o form através do botão", () => {
        const queryClient = new QueryClient()
        const onSubmitFormSpy = vi.fn()
        const { getByTestId } = render(
            <QueryClientProvider client={queryClient}>
                <FormTask onSubmitForm={onSubmitFormSpy} isPending={false}/>
            </QueryClientProvider>
        )

        const input = getByTestId("input-create-task")
        fireEvent.change(input, {target: {value: "Primeira task"}})

        const button = getByTestId("button-create-task")
        fireEvent.click(button)

        expect(onSubmitFormSpy).toBeCalled()  
    })
    test("O botão deve estar desabilitado quando a requisição estiver pendente", () => {
        const queryClient = new QueryClient()
        const { getByTestId } = render(
            <QueryClientProvider client={queryClient}>
                <FormTask onSubmitForm={() => {}} isPending={true}/>
            </QueryClientProvider>
        )
        const button = getByTestId("button-create-task")
        expect(button).toBeDisabled()
    })
    test("O input deve estar desabilitado quando a requisição estiver pendente", () => {
        const queryClient = new QueryClient()
        const { getByTestId } = render(
            <QueryClientProvider client={queryClient}>
                <FormTask onSubmitForm={() => {}} isPending={true}/>
            </QueryClientProvider>
        )
        const input = getByTestId("input-create-task")
        expect(input).toBeDisabled()
    })
})