import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useFetch } from '../../customHooks/useFetch';
import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/client.js';
import "./itemDetailContainer.css"



const ItemDetailContainer = () => {
    const { id } = useParams();
    //const { data, loading, error } = useFetch('/productos.json');
    const [ product, setProduct ] = useState([]);
    
    //PARA TRAER SOLO UN PRODUCTO DE LA BASE DE DATOS
    const productRef = doc(db, 'products', id);

    const getProduct = () =>{
        getDoc(productRef).then((snapshot =>{
        if(snapshot.exists()){
            const productData = { id: snapshot.id, ...snapshot.data() };
            console.log( productData);
            setProduct(productData);
        }
        }))
    }

    useEffect(() =>{
        getProduct();
    }, [])

    /*if(loading){
        return <div>Cargando</div>
    }
    
    if(error){
        return <div>ERROR</div>
    }
    console.log("Data: ", data);*/
    
    //const product = products.find((product) => product.id === parseInt(id));

    return(
        <div className="product-page">

            <div className="product-content">
                <div className="product-images">
                    <div className="thumbnails">
                        <img src={`../src/assets/${product.img}`} alt={`${product.name}`}/>
                        <img src={`../src/assets/${product.img}`} alt={`${product.name}`}/>
                        <img src={`../src/assets/${product.img}`} alt={`${product.name}`}/>
                    </div>
                    <div className="main-image">
                        <img src={`../src/assets/${product.img}`} alt={`${product.name}`}/>
                    </div>
                </div>
        
                <div className="product-details">
                    <h1>{product.name}</h1>
                    <p className="product-code">Art: {product.code}</p>
                    <div className="price-section">
                        <span className="sim">$ UYU </span>
                        <span className="amount">{product.price}</span>
                    </div>
                    <div className="product-options">
                        <div className="sizes">
                            <label htmlFor="sizes">Talle:</label>
                            <div className="size-options">
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                            </div>
                        </div>
                        <div className="actions">
                            <button className="wishlist-button"><i className="fa-regular fa-heart"></i></button>
                            <div className="quantity">
                                <select id="quantity" name="quantity">
                                    <option value="1">Cant.: 1</option>
                                    <option value="2">Cant.: 2</option>
                                    <option value="3">Cant.: 3</option>
                                    <option value="4">Cant.: 4</option>
                                </select>
                            </div>
                            <button className="btn btn-secondary">COMPRAR</button>
                        </div>
                    </div>
            
                    
            
                    <div className="itau-button">
                        <button className="millas-button">
                            <img src="../public/img/itau.png" alt="Itau"/> CANJEÁ ACÁ TUS MILLAS ITAÚ
                        </button>
                    </div>
                    
                    <div className="shipping">
                        <p className="shipping-info"><i className="fa-solid fa-truck-fast"></i>MÉTODOS Y COSTOS DE ENVÍO</p>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
  
export default ItemDetailContainer;