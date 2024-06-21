import { useState } from 'react';
import styles from './cover.module.css';

interface CoverProps {
  images: string[];
}

function Cover({ images }: CoverProps) {
  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <div className={styles.image}>
      <img
        className={styles.imageBig}
        src={currentImage}
        alt='Big product view'
      />
      <div className={styles.images}>
        {images.length > 1 &&
          images.map((item, index) => (
            <div
              key={index}
              className={`${styles.imageSmall} ${currentImage === item ? styles.selected : ''}`}
              onClick={() => handleImageClick(item)}
              role='button'
              tabIndex={0}
            >
              <img
                className={styles.imageSmall}
                src={item}
                alt={`Thumbnail ${index + 1}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Cover;
