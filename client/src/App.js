
import Menu from './components/Menu';
// import ShowCard from './components/ShowCard';
import './index.css';
import ShowCart from "./components/ShowCart"
import GlobalState from './components/GlobalState';
import Filter from './components/Header/Filter';
import {useState} from "react"
import React from 'react';
function App() {
  const [idType,setIdType]=useState(-1)
  function ChangeForIdType(id){
    setIdType(id);
  }
  return (

    <GlobalState>
      <ShowCart/>
      <Filter x={ChangeForIdType}></Filter>
      <Menu typeId = {idType} Showall = {false}/>
    </GlobalState>
  );
}

export default App;
