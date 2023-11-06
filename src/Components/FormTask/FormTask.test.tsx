import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import {describe, expect, test} from 'vitest'
import FormTask from "./FormTask"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

describe("<FormTask />", () => {
    test("Deve renderizar corretamente", () => {
        const queryClient = new QueryClient()
        const {getByText} = render(
            <QueryClientProvider client={queryClient}>
                <FormTask />
            </QueryClientProvider>
        )

        expect(getByText("Criar")).toBeInTheDocument()
    })
})