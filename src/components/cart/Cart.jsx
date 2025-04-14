import React, { useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext.jsx';
import { db } from '../../firebase/client.js';
import { addDoc, collection } from 'firebase/firestore';
import './cart.css';

const Cart = () =>{
    const [ buyer, setBuyer ] = useState({ name: '', phone: '', email: '' });
    const { lista } = useContext(ShopContext);

    const createOrder = () =>{
        const order = {
            buyer,
            items: [{id: 1, title: "Producto 1", quantity: 2, total: 1000}],
            total: 1000 
        };
        console.log(order);
    }
    console.log("La lista: ", lista);

    return (
        <>
            <div className="cart-container">
                <div className="cart-details">
                    <h2>DETALLE DEL PEDIDO</h2>
                    <div className="cart-account">
                        <p>flovaliente143@gmail.com</p>
                        <a href="#">Cambiar cuenta</a>
                    </div>
                    
                    <ul className="cart-items">
                        {lista.map((product) =>(
                            <li key={product.id} className="cart-item">
                                <div className="cart-item-info">
                                    <img src={`../public/img/${product.img}`} alt={`${product.name}`} className="cart-item-img" />
                                    <div className="cart-item-description">
                                        <h3>{product.name}</h3>
                                        <p className="product-code">Art: {product.code}</p>
                                    </div>
                                </div>
                                <div className="cart-item-quantity">
                                    <button className="quantity-btn">-</button>
                                        <span>{product.quantity}</span>
                                    <button className="quantity-btn">+</button>
                                </div>

                                <p>$ UYU  {product.price * product.quantity}</p>
                                        
                                <a id="cart-data"><i className="fa-regular fa-trash-can"></i></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>Cart</div>
            <input type="text" placeholder='Nombre' onChange={(e) => setBuyer({ ...buyer, name: e.target.value})} />
            <input type="number" placeholder='Telefono' onChange={(e) => setBuyer({ ...buyer, phone: e.target.value})} />
            <input type="text" placeholder='Email' onChange={(e) => setBuyer({ ...buyer, email: e.target.value})} />
            <button onClick={createOrder}>Finalizar Compra</button>
        </>
    )
}

export default Cart;