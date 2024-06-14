import { useState, useEffect, useCallback } from 'react';
import { useGetProductsQuery } from '../api/productsApi';
import { Product } from '../../components/types';
import { debounce } from 'lodash';

function getRandom() {
  return Math.floor(Math.random() * 186);
}

export function useProductData() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [skipProducts, setSkipProducts] = useState<number>(getRandom());

  const { data, error, isLoading, refetch } = useGetProductsQuery({
    q: debouncedQuery,
    limit: '9',
    skip: `${skipProducts}`,
  });

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedQuery(query);
    }, 300);

    handler();

    return () => {
      handler.cancel();
    };
  }, [query]);

  useEffect(() => {
    if (data?.products) {
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [debouncedQuery, skipProducts, refetch]);

  const handleShowMore = useCallback(() => {
    setSkipProducts((prevSkip) => {
      let newSkip;
      do {
        newSkip = prevSkip + 9 >= 185 ? getRandom() : prevSkip + 9;
      } while (skipProducts === newSkip);
      return newSkip;
    });
  }, [skipProducts]);

  const handleInput = (inputValue: string) => {
    setQuery(inputValue);
    setProducts([]);
    if (inputValue.trim() !== '') {
      setSkipProducts(0);
    } else {
      setSkipProducts(getRandom());
    }
  };

  const handleButton = () => {
    if (query.trim() === '') {
      setProducts([]);
      setDebouncedQuery('');
      setSkipProducts(getRandom());
    }
    refetch();
  };

  return {
    products,
    isLoading,
    error,
    handleShowMore,
    handleInput,
    handleButton,
  };
}
