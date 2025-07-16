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
    },

    async createUser(name: string, email: string, password:string){
        try{
            const res = await axios.post(BASE_URL, {
                name,
                email,
                password
            });

            return res.data;
        }catch (error){
            if(axios.isAxiosError(error)){
                console.error('Erro ao criar usuário: ',error.response?.data || error.message);
                throw new Error(error.response?.data?.message || 'Erro ao criar usuário.');
            } else {
                console.error('Erro inesperado ao criar usuário:', error);
                throw new Error('Ocorreu um erro inesperado.');
            }
            }
        }
}

