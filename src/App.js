import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
<Router>
  <Header></Header>
<Switch>
  <Route exact path='/'>
<Home></Home>
  </Route>
<Route path='/service'>
<Services></Services>
</Route>
<Route path='/about'>
<About></About>
</Route>
<Route path='/contact'>
<Contact></Contact>
</Route>
<Route path='*'>
<NotFound></NotFound>
</Route>
  </Switch>
  <Footer></Footer>
  </Router>
    </div>
  );
}

export default App;
