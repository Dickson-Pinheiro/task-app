import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import {describe, expect, test} from 'vitest'
import Task from "./Task"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

describe("<Task />", () => {
    test("deve renderizar corretamente", () => {
        const queryClient = new QueryClient()
        const {getByText} = render(
            <QueryClientProvider client={queryClient}>
                <Task done={false} id="1" priority="alta" text="primeira task"/>
            </QueryClientProvider>
        )

        expect(getByText("primeira task")).toBeInTheDocument()
    })
})