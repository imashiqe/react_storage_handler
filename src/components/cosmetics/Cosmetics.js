import React, { useEffect ,useState} from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmetics = (data) => {
    const [cosmetics, setCosmetics ] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setCosmetics(data))
    },[])
   
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