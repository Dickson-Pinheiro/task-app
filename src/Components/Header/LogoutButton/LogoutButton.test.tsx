import "@testing-library/jest-dom"
import { fireEvent, render } from "@testing-library/react"
import {describe, expect, test, vi} from 'vitest'
import LogoutButton from "./LogoutButton"


describe("<LogoutButton />", () => {
    test("Deve renderizar corretamente", () => {
        const { getByText } = render(
            <LogoutButton handleLogout={() => {}}/>
        )
        
        expect(getByText('Sair')).toBeInTheDocument()
    })
    test("Deve ser possível clicar", () => {
        const handleLogoutSpy = vi.fn()

        const { getByText } = render(
            <LogoutButton handleLogout={handleLogoutSpy}/>
        )

        const button = getByText("Sair")
        fireEvent.click(button)

        expect(handleLogoutSpy).toBeCalled()
    })
})