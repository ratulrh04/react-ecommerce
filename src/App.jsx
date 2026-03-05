import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import { ThemeProvider } from 'styled-components'
import Footer from './components/Footer';

const theme = {
  color:{
      bg : '#0e0ea0',
      color:"white"
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>} /> 
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;