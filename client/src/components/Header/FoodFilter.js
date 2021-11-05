import React from 'react'

const FoodFilter = ({name,id}) => {
    return (
        <>
               
          <li className="filter-item">
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
