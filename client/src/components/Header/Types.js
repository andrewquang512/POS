import Foods from "../Foods";
var Types=[]

Types=Foods.filter((food)=>{
    console.log(food.typeId);
    return Types.includes(food.typeId)? '':Types.push(food.typeId);
})
export {Types}