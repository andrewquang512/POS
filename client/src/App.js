
import Menu from './components/Menu';
// import ShowCard from './components/ShowCard';
import './index.css';
import ShowCart from "./components/ShowCart"
import GlobalState from './components/GlobalState';
function App() {
  return (
    <GlobalState>
      <ShowCart/>
      <Menu />
    </GlobalState>
  );
}

export default App;
