import { useEffect, useState } from 'react';
import { useAppDispatch } from '../store';
import { setUser, setLoading } from '../slices/userSlice';
import { useGetUserQuery } from '../api/userApi';

const useAuth = () => {
  const dispatch = useAppDispatch();
  const [token, setToken] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  const { data, isLoading } = useGetUserQuery(token);

  useEffect(() => {
    dispatch(setLoading(isLoading));
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, isLoading, dispatch]);

  return { isLoading };
};

export default useAuth;
