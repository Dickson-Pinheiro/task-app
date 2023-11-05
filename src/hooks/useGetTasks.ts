import { useQuery } from "@tanstack/react-query";
import { taskService } from "../services/taskService";

export function useGetTasks(){
    const { findAllTasks } = taskService()
    const query = useQuery(
        {
            queryKey: ['tasks'],
            queryFn: findAllTasks
        }
    )
    const {error} = query
    if(error){
        console.log(error)
    }
    return query
}