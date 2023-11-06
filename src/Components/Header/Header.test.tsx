import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import {describe, expect, test} from 'vitest'
import Header from "./Header"
import { AuthProvider } from "../../context/AuthContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


describe("<Header />", () => {
    test("Deve renderizar corretamente", () => {
        const queryClient = new QueryClient
        const { getByText } = render(
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <Header changePriorityFilter={() => {}} changeStatusFilter={() => {}}/>
                </AuthProvider>
            </QueryClientProvider>
        )
        
        expect(getByText('Painel de Tarefas')).toBeInTheDocument()
    })
})