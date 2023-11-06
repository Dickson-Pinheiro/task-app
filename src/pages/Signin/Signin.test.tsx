import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import {describe, expect, test} from 'vitest'
import Signin from "./Signin"
import { BrowserRouter } from "react-router-dom"

describe("<Signin />", () => {
    test("deve renderizar corretamente", () => {
        const queryClient = new QueryClient()

        const {getByText} = render(
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Signin />
                </QueryClientProvider>
            </BrowserRouter>
        )
        
        expect(getByText("Painel de Tarefas")).toBeInTheDocument()
    })
})