import React, {createContext, useState, useEffect} from 'react';
import Axios from 'axios';

//Crear el context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    //crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    //Ejecutar el llamado a la api
    useEffect(() =>{
        const obtenerCategortias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await Axios.get(url);
            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategortias();
    }, []);

    //Ejecutar al llamdo Api

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;