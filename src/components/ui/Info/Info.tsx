import { useAppSelector } from '../../../app/store';
import { Order, Product } from '../../types';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import StarIcon from '../Icons/StarIcon';
import styles from './info.module.css';

type InfoProps = {
  item: Product;
};

function Info({ item }: InfoProps) {
  const carts = useAppSelector((store) => store.carts.carts);
  const product: Order = carts[0].products.filter(
    (product: Product) => product.id === item.id,
  )[0];

  const stars = new Array(Math.round(item.rating)).fill(0);
  const discountPrice =
    item.price - item.price * (item.discountPercentage / 100);

  return (
    <div className={styles.info}>
      <div>
        <h2>{item.title}</h2>
        <div>
          <p>
            Rating
            <span className={styles.rating}>
              {stars.map((_, index) => (
                <StarIcon
                  color='#F14F4F'
                  key={index}
                  aria-label={`Star ${index + 1}`}
                />
              ))}
              {new Array(5 - stars.length).fill(0).map((_, index) => (
                <StarIcon
                  color='#B2B5BB'
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
          <Counter size='big' count={product.quantity} />
        </>
      ) : (
        <Button aria-label='Add to cart'>Add to cart</Button>
      )}
    </div>
  );
}

export default Info;
