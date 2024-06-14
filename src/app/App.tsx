import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './store';
import { useGetCartsByUserQuery } from './api/cartsApi';
import { useEffect } from 'react';
import { setCarts, setError } from './slices/cartsSlice';

import Home from '../components/pages/Home/Home';
import Product from '../components/pages/Product/Product';
import Cart from '../components/pages/Cart/Cart';
import Error from '../components/pages/Error/Error';
import Loading from '../components/ui/Loading/Loading';

function App() {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetCartsByUserQuery(50);

  useEffect(() => {
    if (data) {
      dispatch(setCarts(data.carts));
    }

    if (error) {
      if ('status' in error) {
        const message =
          'error' in error ? error.error : JSON.stringify(error.data);
        dispatch(setError(message));
      } else {
        dispatch(setError(error.message ?? 'Unknown error'));
      }
    }
  }, [data, error, dispatch]);

  if (isLoading) return <Loading isLoading={isLoading} />;

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
