import styled from "styled-components"
import {PiFunnelSimpleBold} from 'react-icons/pi'

export default function Header() {
    return (
        <ContainerHeader>
            <Content>
                <h1>Painel de Tarefas</h1>
                <PiFunnelSimpleBold size={28} />
            </Content>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.header`
    width: 100%;
    height: 70px;
    background: ${props => props.theme['background-header-painel']};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    color: ${props => props.theme['white']};
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1277px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
    svg {
        cursor: pointer;
    }
`