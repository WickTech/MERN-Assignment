import './App.css';
import Transactions from './components/Transactions';
import Nav from './components/Nav/Nav';
import { HashRouter} from "react-router-dom"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
    <HashRouter>
      <Nav/>
      <Transactions/>
      <Footer/>
    </HashRouter>
    </>
  );
}

export default App;
