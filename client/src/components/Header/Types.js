import Foods from "../Foods";
import axios from "axios";
// var Foods = []

var Types = []
// const ConfirmOrder = ((foods) => {   
//     const getData = async (foods) => {  
//         await axios.get("http://localhost:5000/revenue/food").then((response) => {
//             // setproduct(response.data)
//             console.log(response.data);
//             foods = response.data
//             Types=foods.filter((food)=>{
//                 console.log(food.catelory);
//                 return Types.includes(food.catelory)? '':Types.push(food.catelory);
//             })
//             console.log("type.............>>>>", Types)
//             return Types;
//         });
//     }  
//     return getData(foods);
    
// })
// Foods = ConfirmOrder(Foods)

Types=Foods.filter((food)=>{
    console.log(food.typeId);
    return Types.includes(food.typeId)? '':Types.push(food.typeId);
})
console.log("type.............>>>>", Types)

export {Types}