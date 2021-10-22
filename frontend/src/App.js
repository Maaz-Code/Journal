import Home from './components/Home';
import "./styles.scss";
import Appbar from './components/Appbar';
import { BrowserRouter, Route } from "react-router-dom";
import Pages from './components/Pages';
import AddPage from './components/AddPage';

const App = () => {
  return (
    <BrowserRouter>
      <Appbar/>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/pages" component={Pages} />
        <Route exact path="/addpage" component={AddPage}/>
      </main>
    </BrowserRouter>
  );
}

export default App;
