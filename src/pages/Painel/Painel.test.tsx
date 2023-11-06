import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import {describe, expect, test} from 'vitest'
import Painel from "./Painel"

describe("<Painel />", () => {
    test("deve renderizar corretamente", () => {
        const queryClient = new QueryClient()

        const {getByText} = render(
            <QueryClientProvider client={queryClient}>
                <Painel />
            </QueryClientProvider>
        )
        
        expect(getByText("Painel de Tarefas")).toBeInTheDocument()
    })
})