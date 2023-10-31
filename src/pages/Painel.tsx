import styled from "styled-components"
import Header from "../Components/Header"
import FormTask from "../Components/FormTask"

export default function Painel(){
    return(
        <ContainerPainel>
            <Header />
            <FormTask/>
        </ContainerPainel>
    )
}

const ContainerPainel = styled.div`
box-sizing: border-box;
`