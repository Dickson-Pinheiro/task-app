import {Outlet, Navigate} from 'react-router-dom'
import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

export default function PrivateRoute(){
    const { signed } = useContext(AuthContext)
    console.log(signed)
    return(
        <>
        {signed && <Outlet />}
        {!signed && <Navigate to="/" />}
        </>
    )
}