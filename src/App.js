import './App.css';
import Navbar from './components/navbar/Navbar'
import Services from './components/services/Services'
import About from './components/about/About'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <About />
    </div>
  );
}

export default App;
