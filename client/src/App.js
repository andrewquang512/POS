import Menu from './components/Menu'
// import ShowCard from './components/ShowCard';
import './index.css'
import ShowCart from './components/ShowCart'
import GlobalState from './components/GlobalState'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from 'react'
import Filter from './components/Header/Filter'
import TypeProducts from './components/TypeProducts'
import ShowInforLine from './components/ShowInforLine'
import Payment from './components/Payment/Payment'
import Admin from './Admin'
function App() {
  const [idType, setIdType] = useState(-1)
  function ChangeForIdType(id) {
    setIdType(id)
  }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <GlobalState>
              <ShowCart />
              <Filter x={ChangeForIdType}></Filter>
              <ShowInforLine typeId={idType} />
              <Menu typeId={idType} />
            </GlobalState>
          </Route>
          <Route path='/payment' component={Payment} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </Router>
    </>
  )
}

export default App
