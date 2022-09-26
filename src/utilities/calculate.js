const add = (first,second) =>{
    return first + second;
}


const  multiply = (first,second) =>{
    return first * second;
}


const numbers = [20,24,235,65,89];
const sumReducer = (previous,current) => previous + current;
const total = numbers.reduce(sumReducer,0);


const items = [
    {}
]


 export {add, multiply}