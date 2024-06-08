import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../components/pages/Home/Home';
import Product from '../components/pages/Product/Product';
import Cart from '../components/pages/Cart/Cart';
import Error from '../components/pages/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
