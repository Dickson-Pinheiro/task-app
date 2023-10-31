import styled from "styled-components";
import Select from 'react-select';
import { Status, statusOptions, prioritiesOptions, PriorityOption } from "../data/selectData";

interface MenuProps {
    changePriorityFilter: (e: readonly PriorityOption[]) => void;
    changeStatusFilter: (e: Status) => void
}

export default function Menu({ changePriorityFilter, changeStatusFilter }: MenuProps){
    return(
        <ContainerMenu>
            <Content>
                <Select options={statusOptions} defaultValue={statusOptions[2]} onChange={e => changeStatusFilter(e?.value as Status)}/>
                <Select options={prioritiesOptions} isMulti defaultValue={[...prioritiesOptions]} onChange={changePriorityFilter}/>
            </Content>
        </ContainerMenu>
    )
}

const ContainerMenu = styled.div`
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
    min-height: 74px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: ${props => props.theme['background-menu']};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    font-family: 'Montserrat', sans-serif;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    @media(max-width: 500px){
        flex-direction: column;
    }
`