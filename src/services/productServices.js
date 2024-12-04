import axios from 'axios';

const URL = import.meta.env.VITE_ENDPOINT_BASE;

export const getProductos = async () => {
    try{
        const respuesta = await axios.get(`${URL}/productos`);
        
        if(respuesta.status === 200)
            return respuesta.data;
        throw new Error('Error al obtener los productos');
    }catch(e){
        console.error(e);
    }
}

export const getProductosPorCategoria = async (categoria) => {
    try{
        const respuesta = await axios.get(`${URL}/productos/categoria/${categoria}`);
        
        if(respuesta.status === 200)
            return respuesta.data;
        throw new Error('Error al obtener los productos');
    }catch(e){
        console.error(e);
        return [];
    }
}