import axios from 'axios';

const URL = import.meta.env.VITE_ENDPOINT_BASE;

export const getUsuarios = async () => {
    try{
        const respuesta = await axios.get(`${URL}/usuarios`);
        
        if(respuesta.status === 200)
            return respuesta.data;
        throw new Error('Error al obtener los usuarios');
    }catch(e){
        console.error(e);
    }
}

export const getUsuarioPorId = async (id) => {
    try{
        const respuesta = await axios.get(`${URL}/usuarios/${id}`);
        
        if(respuesta.status === 200)
            return respuesta.data;
        throw new Error('Error al obtener el usuario');
    }catch(e){
        console.error(e);
        return [];
    }
}