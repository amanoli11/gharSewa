import './App.css';
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import OrderServices from './components/orderServices/OrderServices'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Route from 'react-router-dom/Route'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Router path="/" exact='true' strict>
            <Services />
            <About />
          </Router>
        </Switch>
        <Route path="/orderservices" exact='true' component={OrderServices} />
      </div>
    </Router >
  );
}

export default App;
