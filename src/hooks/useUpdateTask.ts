import { useMutation, useQueryClient } from "@tanstack/react-query";
import { taskService } from "../services/taskService";
import {AxiosError} from 'axios'
import {useContext} from 'react';
import { AuthContext } from "../context/AuthContext";

export function useUpdateTask(){
    const {updateTask} = taskService()
    const queryClient = useQueryClient()
    const { logout } = useContext(AuthContext)

    const mutation = useMutation({
        mutationFn: updateTask,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['tasks']})
        },
        onError: (err) => {
                const axiosError = err as AxiosError
                if(axiosError.response?.status === 401 && logout){
                    logout()
            }   
        }
    })

    return mutation
}