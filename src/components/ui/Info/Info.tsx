import { useAppSelector } from '../../../app/store';
import { calculateDiscountPrice } from '../../../app/utils/calculateDiscountPrice';
import { Order, Product } from '../../types';
import { generateStarArray } from '../../../app/utils/generateStarArray';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import StarIcon from '../Icons/StarIcon';
import styles from './info.module.css';
import { useQuantity } from '../../../app/hooks/useQuantity';
import { useGetProductsByIdQuery } from '../../../app/api/productsApi';

type InfoProps = {
  item: Product;
};

function Info({ item }: InfoProps) {
  const carts = useAppSelector((store) => store.carts.carts);
  const product: Order | undefined = carts[0].products.find(
    (product) => product.id === item.id,
  );

  const stars = generateStarArray(item.rating);
  const discountPrice = calculateDiscountPrice(item);

  const accessToken = localStorage.getItem('access');
  const { data } = useGetProductsByIdQuery({
    productId: item.id,
    token: accessToken,
  });
  const { addProductToCart, updateProductQuantity } = useQuantity();

  const handleAddProductToCart = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    event.stopPropagation();
    addProductToCart(item.id);
  };

  const handleUpdateQuantity = (action: 'increment' | 'decrement') => {
    updateProductQuantity(item.id, action);
  };

  return (
    <div className={styles.info}>
      <div>
        <h2>{item.title}</h2>
        <div>
          <p>
            Rating
            <span className={styles.rating}>
              {stars.map((star, index) => (
                <StarIcon
                  color={star ? '#F14F4F' : '#B2B5BB'}
                  key={index}
                  aria-label={`Star ${index + 1}`}
                />
              ))}
            </span>
          </p>
          <p>
            Base price<span>{item.price}$</span>
          </p>
          <p>
            Discount percentage<span>{item.discountPercentage}%</span>
          </p>
          <p>
            Discount price<span>{discountPrice.toFixed(2)}$</span>
          </p>
          <p>
            Stock<span>{item.stock}</span>
          </p>
          <p>
            Brand<span>{item.brand || 'None'}</span>
          </p>
          <p>
            Category<span>{item.category}</span>
          </p>
          <p className={styles.description}>
            Description
            <span>{item.description}</span>
          </p>
        </div>
      </div>
      {product ? (
        <>
          <Counter
            stock={data.stock}
            onUpdateQuantity={handleUpdateQuantity}
            size='big'
            count={product.quantity}
          />
        </>
      ) : (
        <Button onClick={handleAddProductToCart} aria-label='Add to cart'>
          Add to cart
        </Button>
      )}
    </div>
  );
}

export default Info;
