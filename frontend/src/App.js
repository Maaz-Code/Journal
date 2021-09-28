import Home from './components/Home';
import "./styles.scss";
import Appbar from './components/Appbar';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Appbar/>
      <Home/>
    </BrowserRouter>
  );
}

export default App;
