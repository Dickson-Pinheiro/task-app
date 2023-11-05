import { api } from "./apiService";

export interface IUserSignup {
    name: string;
    email: string;
    password: string;
}

export interface ISignInUser {
    email: string;
    password: string;
}

export function authService(){

    const services = {
        async signupUser(data: IUserSignup){
            return await api.post('/auth/signup', data)
        },

        async signinUser(data: ISignInUser){
            return await api.post('/auth/signin', data)
        }
    }

    return services
}