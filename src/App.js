import {Fragment} from 'react';
import Footer from './components/Footer';
import Home from './Views/home';
import NavBar from './components/navBar';
import OrigenL from './assets/OS-logo.png';

function App() {
  return (
<Fragment>
<img src={OrigenL} alt="OS-LOGO" className="OS-LOGO" />
  <NavBar/>
  <Home/>
  <Footer/>
</Fragment>   
  );
}

export default App;
