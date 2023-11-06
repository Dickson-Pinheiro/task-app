import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import {describe, expect, test} from 'vitest'
import Signup from './Signup'
import { BrowserRouter } from "react-router-dom"

describe("<Signup />", () => {
    test("deve renderizar corretamente", () => {
        const queryClient = new QueryClient()

        const {getByText} = render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Signup />
                </QueryClientProvider>
            </BrowserRouter>
        )
        
        expect(getByText("Painel de Tarefas")).toBeInTheDocument()
    })
})