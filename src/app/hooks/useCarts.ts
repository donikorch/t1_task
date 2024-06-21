import { useEffect } from 'react';
import { useGetCartsByUserQuery } from '../api/userApi';
import { useAppDispatch } from '../store';
import { setCarts, setError } from '../slices/cartsSlice';

const useCarts = (userId: number | undefined) => {
  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem('access');
  const { data, error } = useGetCartsByUserQuery({
    userId,
    token: accessToken,
  });

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

  return { data };
};

export default useCarts;
