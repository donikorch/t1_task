import Button from '../Button/Button';
import StarIcon from '../Icons/StarIcon';
import styles from './info.module.css';

function Info() {
  const array = new Array(5).fill(0);

  return (
    <div className={styles.info}>
      <div>
        <h2>Puma Force 1 Shadow</h2>
        <div>
          <p>
            Rating
            <span className={styles.rating}>
              {array.map((_, index) => (
                <StarIcon key={index} aria-label={`Star ${index + 1}`} />
              ))}
            </span>
          </p>
          <p>
            Base price<span>500$</span>
          </p>
          <p>
            Discount percentage<span>10%</span>
          </p>
          <p>
            Discount price<span>450$</span>
          </p>
          <p>
            Stock<span>13</span>
          </p>
          <p>
            Brand<span>Puma</span>
          </p>
          <p>
            Category<span>Smartphones</span>
          </p>
          <p>
            Description
            <span>An apple mobile which is nothing like apple</span>
          </p>
        </div>
      </div>
      <Button aria-label='Add to cart'>Add to cart</Button>
    </div>
  );
}

export default Info;
