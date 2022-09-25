import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
     const cosmetics = 
     [
        {
          "id": "63306cd50a7cb24bce3158fe",
          "price": "$1,422.07",
          "name": "Sharpe Rhodes",
          "favoriteFruit": "banana"
        },
        {
          "id": "63306cd51fbd7679da05d867",
          "price": "$3,161.37",
          "name": "Ora Cohen",
          "favoriteFruit": "banana"
        },
        {
          "id": "63306cd5f352395b896164ce",
          "price": "$2,282.91",
          "name": "Palmer Hamilton",
          "favoriteFruit": "apple"
        },
        {
          "id": "63306cd5849d63560e9e570a",
          "price": "$1,033.86",
          "name": "Minerva Mayer",
          "favoriteFruit": "strawberry"
        },
        {
          "id": "63306cd5a6beafc7fc1b9889",
          "price": "$1,634.79",
          "name": "Shanna Fry",
          "favoriteFruit": "strawberry"
        },
        {
          "id": "63306cd54e664b4527bbdd15",
          "price": "$1,586.30",
          "name": "Brown Brady",
          "favoriteFruit": "strawberry"
        }
      ]
    //  [
    //     {id: 1, name: 'Alta', price:100 },
    //     {id: 2, name: 'Palish', price:200 },
    //     {id: 3, name: 'Malis', price:300 },
    //     {id: 4, name: 'Balis', price:400 },
    //     {id: 5, name: 'Nalis', price:500 },
    //  ]
    // const first = 55;
    // const second = 66;
    // const  total = add(first , second);
    return (
        <div>
            <h1>Welcome to  my cosmetic Store</h1>
            {/* <p>Total : {total}</p> */}
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic ={cosmetic}
                    ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;