// В PrivateRoute.js
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../../app/store';
import Loading from '../Loading/Loading';

const PrivateRoute = () => {
  const user = useAppSelector((state) => state.user.user);
  const isLoading = useAppSelector((state) => state.user.isLoading);

  if (isLoading) return <Loading isLoading={isLoading} />;

  return user ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
