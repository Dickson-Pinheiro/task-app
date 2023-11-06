import "@testing-library/jest-dom"
import { fireEvent, render } from "@testing-library/react"
import {describe, expect, test, vi} from 'vitest'
import ToggleDoneButton from "./ToggleDoneButton"

describe("<ToggleDoneButton />", () => {
    test("deve renderizar corretamente", () => {
        const { getByTestId } = render(<ToggleDoneButton done={false} doneTask={() => {}} isPendingDone={false} undoneTask={() => {}}/>)
        expect(getByTestId("unchecked")).toBeInTheDocument()
    })
    test("Deve ser clicável quando não estiver concluído ou carregando", () => {
        const doneTaskSpy = vi.fn()
        const { getByTestId } = render(<ToggleDoneButton done={false} doneTask={doneTaskSpy} isPendingDone={false} undoneTask={() => {}}/>)
        const button = getByTestId("unchecked")

        fireEvent.click(button)
        expect(doneTaskSpy).toBeCalled()
    })
    test("deve renderizar o checked quando estiver concluído", () => {
        const { getByTestId } = render(<ToggleDoneButton done={true} doneTask={() => {}} isPendingDone={false} undoneTask={() => {}}/>)
        expect(getByTestId("checked")).toBeInTheDocument()
    })
    test("deve ser clicável quando estiver concluído", () => {
        const undoneTaskSpy = vi.fn()
        const { getByTestId } = render(<ToggleDoneButton done={true} doneTask={() => {}} isPendingDone={false} undoneTask={undoneTaskSpy}/>)
        
        const button = getByTestId("checked")
        fireEvent.click(button)

        expect(undoneTaskSpy).toBeCalled()
    })
    test("Deve renderizar o loading quando não estiver concluído e pendente", () => {
        const { getByTestId } = render(<ToggleDoneButton done={false} doneTask={() => {}} isPendingDone={true} undoneTask={() => {}}/>)
        const loading = getByTestId("oval-svg")
        expect(loading).toBeInTheDocument()
    })
})