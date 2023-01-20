import './App.css';
import Footer from './Components/Footer';

import  Navbar  from './Components/Navbar';
// import Home from './Pages/Home';
import Products from './Pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar  />
      {/* <Home /> */}
      <Products />
      <Footer />
    </div>
  );
}

export default App;
