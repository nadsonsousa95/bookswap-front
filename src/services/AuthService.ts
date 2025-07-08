import axios from 'axios';

const BASE_URL = "http://localhost:3001/users";

export const AuthService = {
    async login(email: string, password: string){
            const res = await axios.get(BASE_URL, {
                params: {email, password}
            });

            if (res.data.length > 0){
                return res.data[0]; // Simula token
            }else{
                throw new Error('Email ou senha inválidos')
            }
    }
}