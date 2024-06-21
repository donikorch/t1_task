import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Product from '../components/pages/Product/Product';
import Cart from '../components/pages/Cart/Cart';
import Error from '../components/pages/Error/Error';
import Login from '../components/pages/Login/Login';
import PrivateRoute from '../components/ui/PrivateRoute/PrivateRoute';
import useAuth from './hooks/useAuth';
import Loading from '../components/ui/Loading/Loading';
import { useAppSelector } from './store';
import useCarts from './hooks/useCarts';

function App() {
  const { isLoading } = useAuth();

  const user = useAppSelector((store) => store.user.user);
  useCarts(user?.id);

  if (isLoading) return <Loading isLoading={isLoading} />;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
