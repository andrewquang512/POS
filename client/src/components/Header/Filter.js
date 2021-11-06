import React, { useState } from "react";
import FoodFilter from "./FoodFilter";
import { Types } from "./Types";
console.log(Types);
const Filter = ({x}) => {
  const [types, setTypes] = useState(Types);
  const handleNext = () => {
    const newTypes = [...types];
    const firtType=newTypes.shift()
    newTypes.push(firtType)
    setTypes(newTypes)
    
  };
  const handleBack = () => {
    
    const newTypes = [...types];
    const firtType=newTypes.pop()
    newTypes.unshift(firtType)
    setTypes(newTypes)
    
  };
  return (
    <>
      <div className="backtohome">
        <i className="fas fa-home backtohome-icon"></i>
        <h3 className="backtohome-title">Back to Home</h3>
      </div>

      <div className="filter-food">
        <div className="button-filter button-back">
          <div onClick={handleBack} class="arrow-left-food arrow-food"></div>
        </div>

        <ul className="filter-list">
          {types.map((typeFood) => {
              return (
                <FoodFilter
                  key={typeFood.typeId}
                  name={typeFood.typeName}
                  id={typeFood.typeId}
                  x_value={x}
                />
              );
          })}
        </ul>

        <div className="button-filter button-next">
          <div onClick={handleNext}  class="arrow-right-food arrow-food"></div>
        </div>
      </div>
    </>
  );
};

export default Filter;
