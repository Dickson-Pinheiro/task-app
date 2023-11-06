import "@testing-library/jest-dom"
import {  fireEvent, render } from "@testing-library/react"
import {describe, expect, test, vi} from 'vitest'
import TaskDescriptionForm from "./TaskDescriptionForm"

describe("<TaskDescriptionForm />", () => {
    test("Deve renderizar corretamente", () => {
        const { getByTestId } = render(<TaskDescriptionForm editTaskValueBlur={() => {}} editTaskValueSubmit={() => {}} editValue="uma task" editValueState={() => {}}/>)

        expect(getByTestId("form-create-task")).toBeInTheDocument()
    })
    test("Deve emitir evento quando for submetido", () => {
        const editTaskValueSubmitSpy = vi.fn()
        const { getByTestId } = render(<TaskDescriptionForm editTaskValueBlur={() => {}} editTaskValueSubmit={editTaskValueSubmitSpy} editValue="uma task" editValueState={() => {}}/>)
        const form = getByTestId("form-create-task")
        fireEvent.submit(form)

        expect(editTaskValueSubmitSpy).toBeCalled()
    })
    test("Deve emitir evento ao perder o foco no input", () => {
        const editTaskValueBlurSpy = vi.fn()
        const { getByTestId } = render(<TaskDescriptionForm editTaskValueBlur={editTaskValueBlurSpy} editTaskValueSubmit={() => {}} editValue="uma task" editValueState={() => {}}/>)
        const input = getByTestId("input-form-edit")
        fireEvent.blur(input)

        expect(editTaskValueBlurSpy).toBeCalled()
    })
})