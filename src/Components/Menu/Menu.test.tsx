import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import {describe, expect, test} from 'vitest'
import Menu from "./Menu"

describe("<Menu />", () => {
    test("Deve renderizar corretamente.", () => {
        const { getByText } = render(
                <Menu changePriorityFilter={() => {}} changeStatusFilter={() => {}}/>
            )

        expect(getByText("Todos")).toBeInTheDocument()
    })
})