import React,{useRef, useState} from 'react'

const FoodFilter = ({name,id,selected,handleOneSelected}) => {
  var className="filter-item"
  if (selected===id) className="filter-item filter-item-seleted"
  const filterRef=useRef()
  const handleClickFilter=(id)=>{
    handleOneSelected(id)

  }
    return (
        <>
               
          <li
          ref={filterRef}
          onClick={()=>handleClickFilter(id)}
          className={className}>
            <img
              src="https://thumbs.dreamstime.com/b/yummy-vanilla-cupcake-white-background-vertical-14882157.jpg"
              alt=""
              className="filter-item-img"
            />
            <h3 className="filter-item-title">{name}</h3>
          </li>
        </>
    )
}

export default FoodFilter
