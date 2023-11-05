import styled from "styled-components";
import Select from 'react-select';
import { statusOptions, prioritiesOptions, PriorityOption, StatusOption } from "../data/selectData";

interface MenuProps {
    changePriorityFilter: (e: readonly PriorityOption[]) => void;
    changeStatusFilter: (e: StatusOption) => void
}

export default function Menu({ changePriorityFilter, changeStatusFilter }: MenuProps){
    return(
        <ContainerMenu>
            <Content>
                <CustomSelect options={statusOptions} defaultValue={statusOptions[2]} onChange={(e) => changeStatusFilter(e as StatusOption)}/>
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

const CustomSelect = styled(Select)`
    min-width: 200px;
`