import styled from "styled-components"
import {PiFunnelSimpleBold} from 'react-icons/pi'
import { PriorityOption, StatusOption } from "../data/selectData"
import { useState, useContext } from "react";
import Menu from "./Menu";
import { AuthContext } from "../context/AuthContext";

interface HeaderProps {
    changePriorityFilter: (e: readonly PriorityOption[]) => void
    changeStatusFilter: (e: StatusOption) => void
}

export default function Header({changePriorityFilter, changeStatusFilter}: HeaderProps) {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const {logout} = useContext(AuthContext) as {logout: Function}

    function handleLogout(){
        logout()
    }

    return (
        <>
        <ContainerHeader>
            <Content>
                <PiFunnelSimpleBold size={28} onClick={() => setShowMenu(m => !m)}/>
                <h1>Painel de Tarefas</h1>
                <button onClick={handleLogout}>Sair</button>
            </Content>
        </ContainerHeader>
        <ContainerMenu className={showMenu ?'open':''}>
            <Menu changePriorityFilter={changePriorityFilter} changeStatusFilter={changeStatusFilter}/>
        </ContainerMenu>
        </>
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

    h1 {
        font-size: 20px;
    }

    button {
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
    }
`

const ContainerMenu = styled.div`
    max-height: 0;
    min-height: 0;
    overflow: hidden;
    transition: 200ms;
    &.open {
        max-height: none;
        min-height: 74px;
        overflow: initial;
    }
`