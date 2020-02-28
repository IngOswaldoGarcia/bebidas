import React, {createContext, useState, useEffect} from 'react';

//Crear el context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    //crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    //Ejecutar al llamdo Api

    return (
        <CategoriasContext.Provider
            value={{

            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;