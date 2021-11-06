import React from 'react'
import Foods from '../Foods'
import Menu from '../Menu';
const TypeProducts={
  1: 'https://thescranline.com/wp-content/uploads/2021/03/Vanilla-Cupcakes.jpg',
  2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Plateau_van_zeevruchten.jpg/1200px-Plateau_van_zeevruchten.jpg',
  3: 'https://cordis.europa.eu/docs/results/images/2020-02/415400.jpg',
  4: 'https://cf.shopee.vn/file/f6a87bd170eab0d27850ca866bcbc66e',
  5: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmN2HCg7kPZPYTpVRJv8DaSnioDEJtsl6bQQ&usqp=CAU',
};


function ShowType(){
  <Menu
  typeId = {0}
  Showall = {false}
  />
}

function FoodFilter({name, id, x_value}){
  function getMenu(){
    x_value(id);
    
  }
  return (
        <>
          <li className="filter-item" onClick={getMenu}>
            <img
              src={TypeProducts[id]}
              alt=""
              className="filter-item-img"
            />
            <h3 className="filter-item-title">{name}</h3>
          </li>
        </>
    )
}

export default FoodFilter
