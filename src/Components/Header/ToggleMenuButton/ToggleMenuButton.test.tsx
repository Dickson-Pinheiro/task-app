import "@testing-library/jest-dom"
import { fireEvent, render } from "@testing-library/react"
import {describe, expect, test, vi} from 'vitest'
import ToggleMenuButton from "./ToggleMenuButton"


describe("<ToggleMenuButton />", () => {
    test("Deve renderizar corretamente", () => {
        const { getByTestId } = render(
            <ToggleMenuButton toggleMenu={() => {}}/>
        )
        
        expect(getByTestId('toggle-menu-button')).toBeInTheDocument()
    })
    test("Deve ser possível clicar", () => {
        const toggleMenuSpy = vi.fn()
        const { getByTestId } = render(
            <ToggleMenuButton toggleMenu={toggleMenuSpy}/>
        )
        
        const button = getByTestId('toggle-menu-button')
        fireEvent.click(button)

        expect(toggleMenuSpy).toBeCalled()
    })
})