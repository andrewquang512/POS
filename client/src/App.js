
import Menu from './components/Menu';
// import ShowCard from './components/ShowCard';
import './index.css';
import ShowCart from "./components/ShowCart"
import GlobalState from './components/GlobalState';

import { useState } from 'react';
import Filter from './components/Header/Filter';
import TypeProducts from './components/TypeProducts';
import ShowInforLine from './components/ShowInforLine';
function App() {
  const [idType,setIdType]=useState(-1)
  function ChangeForIdType(id){
    setIdType(id);
  }
  return (
      <GlobalState>
        <ShowCart/>
        <Filter x={ChangeForIdType}></Filter>
        <ShowInforLine typeId={idType}/>
        <Menu typeId = {idType}/>

      </GlobalState>
  );
}

export default App;
