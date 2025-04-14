import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopComponentContext = ({ children }) =>{
    const [lista, setLista] = useState([]);

    const addToList = (item, quantity) =>{
        console.log("Item: ", item);
        console.log("Quantity: ", quantity);
        const existingProd = lista.findIndex(prod => prod.id === item.id); //Devuelve -1 si el prod no esta en la lista
        if( existingProd != -1){
            const updated = [ ...lista ];
            updated[existingProd].quantity += quantity;
            setLista(updated); 
        }else{
            setLista([...lista, { ...item, quantity }]);
        }
        console.log("Carrito: ", lista);
    }

    return(
        <ShopContext.Provider value={{ lista, setLista, addToList }}>
            {children}
        </ShopContext.Provider>
    )
}