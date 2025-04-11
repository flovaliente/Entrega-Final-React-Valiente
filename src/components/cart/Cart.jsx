import React, { useState } from 'react';
import { db } from '../../firebase/client.js';
import { addDoc, collection } from 'firebase/firestore';

const Cart = () =>{
    const [ buyer, setBuyer ] = useState({ name: '', phone: '', email: '' });

    const createOrder = () =>{
        const order = {
            buyer,
            items: [{id: 1, title: "Producto 1", quantity: 2, total: 1000}],
            total: 1000 
        };
        console.log(order);
    }

    return (
        <>
            <div>Cart</div>
            <input type="text" placeholder='Nombre' onChange={(e) => setBuyer({ ...buyer, name: e.target.value})} />
            <input type="number" placeholder='Telefono' onChange={(e) => setBuyer({ ...buyer, phone: e.target.value})} />
            <input type="text" placeholder='Email' onChange={(e) => setBuyer({ ...buyer, email: e.target.value})} />
            <button onClick={createOrder}>Finalizar Compra</button>
        </>
    )
}

export default Cart;