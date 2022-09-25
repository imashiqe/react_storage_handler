import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic;
    const addToCart = () =>{
        console.log('item added', id);
    }
    const  addToCartwithParam = () => addToCart(id);
    return (
        <div className='product'>
            <h2>Buy this : {name}</h2>
            <p>only for:{price} $</p>
            <p>This is id : <small>{id}</small></p>
            <button onClick={addToCart(addToCartwithParam)}>Add To Cart</button>
        </div>
    );
};

export default Cosmetic;