import React from 'react';

const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic;
    return (
        <div>
            <h2>Buy this : {name}</h2>
            <p>only for:{price} $</p>
            <p>This is id : <small>{id}</small></p>
        </div>
    );
};

export default Cosmetic;