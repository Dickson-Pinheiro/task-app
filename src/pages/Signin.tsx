import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Oval } from 'react-loader-spinner';

export default function Signin() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {signIn, signed, isPending} = useContext(AuthContext)
    const navigate = useNavigate()

    function loginSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data = {
            email,
            password
        }
        if(signIn){
            signIn(data)
        }
    }

    useEffect(() => {
        if(signed){
            navigate('/painel')
        }
    }, [signed])

    return (
        <ContainerLogin>
            <Container>
                <h1>Painel de Tarefas</h1>
                <Form onSubmit={loginSubmit}>
                    <p>Entre para continuar</p>
                    <ContainerInput>
                        <input type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Insira o seu e-mail' />
                    </ContainerInput>
                    <ContainerInput>
                        <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Insira a sua senha' />
                    </ContainerInput>
                    <button type='submit' disabled={isPending}>{isPending ? <Oval width={20} color='#ffffff' secondaryColor='rgb(250, 251, 252)'/> : "continuar"}</button>
                </Form>
                <ContainerSignupLink>
                    <p>Ainda não possui uma conta? <Link to="/signup">Cadastre-se aqui</Link></p>
                </ContainerSignupLink>
            </Container>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 200px;
    background-color:${props => props.theme['login-bg']};
`

const ContainerSignupLink = styled.div`
    margin-top: 20px;
    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        a {
            color: ${props => props.theme['color-link']} 
        }
    }
`

const Container = styled.div`
    min-height: calc(100vh - 100px);
    margin: 50px 0;
    width: 400px;
    padding: 32px 40px 32px 40px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    background-color: ${props => props.theme['white']};
    box-sizing: border-box;
    h1 {
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        cursor: pointer;
        text-align: center;
        padding: 10px;
    }
`

const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    box-sizing: border-box;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding-top: 20px;
    width: 100%;
    gap: 5px;

    p {
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.theme['form-text-color']};
        font-weight: 600;
        margin-bottom: 10px;
        font-size: 14px;
    }

    input {
        width: 100%;
        height: 40px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding-left: 10px;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        background-color: ${props => props.theme['input-login-bg']};
        font-weight: 200;
    }

    button {
        width: 100%;
        height: 40px;
        color: ${props => props.theme['white']};
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        background-color: ${props => props.theme['login-button-bg']};
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: 200ms;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            background-color: ${props => props.theme['login-button-hover']};
        }
    }
`