import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopComponentContext = ({ children }) =>{
    const [lista, setLista] = useState([]);

    const addToList = (item) =>{
        setLista([...lista, item])
    }

    return(
        <ShopContext.Provider value={{ lista, setLista, addToList }}>
            {children}
        </ShopContext.Provider>
    )
}