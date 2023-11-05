import { useMutation } from "@tanstack/react-query";
import { IUserSignup, authService } from "../services/authService";

export function useSignupUser(){
    const {signupUser} = authService()

    const mutation = useMutation({
        mutationFn: signupUser
    })

    return mutation
}