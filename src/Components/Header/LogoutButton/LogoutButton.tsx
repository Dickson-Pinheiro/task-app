import styled from "styled-components"

interface LogoutButtonProps {
    handleLogout: () => void
}

export default function LogoutButton({handleLogout}: LogoutButtonProps){
    return (
        <Buttom onClick={handleLogout} data-testid="logout-button">Sair</Buttom>
    )
}

const Buttom = styled.button`
    border: 3px solid ${props => props.theme['white']};
    border-radius: 8px;
    font-weight: bold;
    background: none;
    color: ${props => props.theme['white']};
    padding: 8px;
    width: 110px;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
`