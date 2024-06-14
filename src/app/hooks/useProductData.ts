import { useState, useEffect, useCallback } from 'react';
import { useGetProductsQuery } from '../api/productsApi';
import { Product } from '../../components/types';

function getRandom() {
  return Math.floor(Math.random() * 186);
}

export function useProductData(
  q: string = '',
  limit: string = '',
  skip: string = '',
) {
  const [products, setProducts] = useState<Product[]>([]);
  const [skipProducts, setSkipProducts] = useState<number>(
    getRandom() || +skip,
  );

  const { data, error, isLoading, refetch } = useGetProductsQuery({
    q,
    limit: limit || '9',
    skip: `${skipProducts}`,
  });

  const handleShowMore = useCallback(() => {
    setSkipProducts((prevSkip) => {
      let newSkip;
      do {
        newSkip = prevSkip + 9 >= 185 ? getRandom() : prevSkip + 9;
      } while (skipProducts === newSkip);
      return newSkip;
    });
  }, [skipProducts]);

  useEffect(() => {
    if (data?.products) {
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [skip, refetch]);

  return { products, isLoading, error, handleShowMore };
}
