import styles from './cover.module.css';

function Cover() {
  const array = new Array(6).fill(0);

  return (
    <div className={styles.image}>
      <img
        className={styles.imageBig}
        src='/images/shoes_2.png'
        alt='Big product view'
      />
      <div className={styles.images}>
        {array.map((_, index) => (
          <div key={index} className={styles[index === 0 ? 'firstImage' : '']}>
            <img
              className={styles.imageSmall}
              src='/images/shoes_3.png'
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cover;
