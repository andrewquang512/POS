import React,{useRef, useState} from 'react'
import ListTypeProducts from '../TypeProducts';

const TypeProducts = ListTypeProducts



const FoodFilter = ({name,id,selected,handleOneSelected, x_value}) => {
  var className="filter-item"
  if (selected===id) className="filter-item filter-item-seleted"
  const filterRef=useRef()
  const handleClickFilter=(id)=>{
    handleOneSelected(id)
    console.log("id",id);
  }
  const getMenu=(id)=>{
    x_value(id);
    console.log("id",id);
    
  }
  function doSomeThing(){
    handleClickFilter(id);
    getMenu(id)
  }
    return (
        <>
               
          <li
          ref={filterRef}
          onClick={doSomeThing}
          className={className}>
            <img
              src={TypeProducts[id].image}
              alt=""
              className="filter-item-img"
            />
            <h3 className="filter-item-title">{name}</h3>
          </li>
        </>
    )
}

export default FoodFilter
