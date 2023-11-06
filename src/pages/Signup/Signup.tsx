import { useState, useEffect } from 'react'
import {AxiosError} from 'axios'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSignupUser } from '../../hooks/useSignupUser';
import { IUserSignup } from '../../services/authService';
import { toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner';

export default function Signin() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { mutate, isPending, isError, error, isSuccess } = useSignupUser()
    const navigate = useNavigate()

    function signupSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const data: IUserSignup = {
            name,
            email,
            password
        }
        mutate(data)
    }

    useEffect(() => {
        if(isError){
            setEmail('')
            setName('')
            setPassword('')
            const axiosError = error as AxiosError<{message: string}>
            toast(axiosError?.response?.data?.message)
        }
        if(isSuccess){
            setEmail('')
            setName('')
            setPassword('')
            navigate('/')
        }
    }, [isError, isSuccess])

    return (
        <ContainerSignup>
            <Container>
                <h1>Painel de Tarefas</h1>
                <Form onSubmit={signupSubmit}>
                    <p>Entre para continuar</p>
                    <ContainerInput>
                        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder='Insira o seu nome' />
                    </ContainerInput>
                    <ContainerInput>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Insira o seu e-mail' />
                    </ContainerInput>
                    <ContainerInput>
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Insira a sua senha' />
                    </ContainerInput>
                    <button type='submit' disabled={isPending}>{isPending ? <Oval width={20} color='#ffffff' secondaryColor='rgb(250, 251, 252)'/> : "continuar"}</button>
                </Form>
                <ContainerSignupLink>
                    <p>Já possui um cadastro? <Link to="/">faça login aqui.</Link></p>
                </ContainerSignupLink>
            </Container>
        </ContainerSignup>
    )
}

const ContainerSignup = styled.div`
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
        text-align: center;
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
    padding: 4px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
        font-family: 'Montserrat', sans-serif;
        background-color: ${props => props.theme['input-login-bg']};
        font-weight: 200;
        box-sizing: border-box;
    }

    button {
        width: 100%;
        height: 40px;
        color: ${props => props.theme['white']};
        font-weight: 400;
        font-family: 'Montserrat', sans-serif;
        background-color: ${props => props.theme['login-button-bg']};
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        cursor: pointer;
        transition: 200ms;
        &:hover {
            background-color: ${props => props.theme['login-button-hover']};
        }
    }
`