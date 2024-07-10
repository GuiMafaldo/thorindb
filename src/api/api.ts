import axios from "axios";

export interface IUser {
    username?: string
}
const api = async (username: string, password: string) => {
    try {
        const response = await axios.post('http://localhost:3001/colaborador', {
            username,
            password
        });
        const user: IUser = response.data
        return user 
    } catch (error) {
        console.error('Erro ao fazer a solicitação:', error);
        throw error; 
    }
};

export default api;
