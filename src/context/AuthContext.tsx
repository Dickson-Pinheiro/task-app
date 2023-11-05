import { createContext, ReactElement, useState, useEffect } from 'react'
import {AxiosError} from 'axios';
import {toast} from 'react-toastify';
import { useSigninUser } from '../hooks/useSigninUser'
import { ISignInUser } from '../services/authService'
import { api } from '../services/apiService';

interface AuthProviderPtops {
    children: ReactElement
}

interface UserState {
    token: string
}

interface AuthContextProviderValue {
    user?: UserState,
    signed?: boolean,
    signIn?: (data: ISignInUser) => void
    isSuccess?: boolean
}

export const AuthContext = createContext<AuthContextProviderValue>({})


export function AuthProvider({children}: AuthProviderPtops){
    const [user, setUser] = useState<UserState>()
    const { mutate, error,isError, data, isSuccess } = useSigninUser()

    function signIn(data: ISignInUser){
        mutate(data)
    }


    useEffect(() => {
        function loadStorageData(){
            const storageUser = localStorage.getItem('user')
            const storageToken = localStorage.getItem('token')
            if(storageToken && storageUser){
                console.log(storageUser)
                setUser(JSON.parse(storageUser))
            }
        }
        loadStorageData()
    }, [])

    useEffect(() => {
        if(isError){
            const axiosError = error as AxiosError<{message: string}>
            toast(axiosError?.response?.data?.message)
        }
        if(isSuccess){
            setUser(data.data)
            api.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`
        }
    }, [isError, isSuccess])

    return(
        <AuthContext.Provider value={{
            user,
            signed: !!user,
            signIn,
            isSuccess
        }}>
            {children}
        </AuthContext.Provider>
    )
}