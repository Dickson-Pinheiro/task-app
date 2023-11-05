import { useQuery } from "@tanstack/react-query";
import { taskService } from "../services/taskService";
import {AxiosError} from 'axios';
import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";

export function useListTasks(){
    const { findAllTasks } = taskService()
    const {logout} = useContext(AuthContext)

    const query = useQuery(
        {
            queryKey: ['tasks'],
            queryFn: findAllTasks,
            retry: false,
        }
    )
    if(query.isError){
        const axiosError = query.error as AxiosError
        if(axiosError.response?.status === 401 && logout){
            logout()
        }
    }

    return query
}