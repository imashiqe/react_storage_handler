import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic;
    const addToCart = () =>{
       addToDb(id)
    };
    const removeFromCart = id =>{
        console.log('removing', id);
    }
    const  addToCartwithParam = () => addToCart(id);

    return (
        <div className='product'>
            <h2>Buy this : {name}</h2>
            <p>only for:{price} $</p>
            <p>This is id : <small>{id}</small></p>
            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;