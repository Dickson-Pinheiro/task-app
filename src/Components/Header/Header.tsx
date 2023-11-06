import styled from "styled-components"
import {PiFunnelSimpleBold} from 'react-icons/pi'
import { PriorityOption, StatusOption } from "../../data/selectData"
import { useState, useContext } from "react";
import Menu from "../Menu/Menu";
import { AuthContext } from "../../context/AuthContext";
import LogoutButton from "./LogoutButton/LogoutButton";
import ToggleMenuButton from "./ToggleMenuButton/ToggleMenuButton";

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

    function toggleMenu(){
        setShowMenu(m => !m)
    }

    return (
        <>
        <ContainerHeader>
            <Content>
                <ToggleMenuButton toggleMenu={toggleMenu}/>
                <h1>Painel de Tarefas</h1>
                <LogoutButton handleLogout={handleLogout}/>
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