import { useState } from 'react';
import type { FC } from 'react';
import styles from './GoodCard.module.css';
import type { Good } from '../../types';
import Counter from '../Counter/Counter';

interface GoodCardProps {
  good: Good;
}

const GoodCard: FC<GoodCardProps> = ({ good }) => {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const plus = () => {
    const currentCount = count;
    const newCount = currentCount + 1;
    setCount(newCount);
    setQuantity(newCount);
  };

  const increase = () => {
    plus();
  };

  const minus = () => {
    const currentCount = count;
    if (currentCount > 0) {
      const newCount = currentCount - 1;
      setCount(newCount);
      setQuantity(newCount);
    } else {
      setCount(0);
      setQuantity(0);
    }
  };

  const decrease = () => {
    minus();
  };

  const order = () => {
    setCount(1);
    setQuantity(1);
  };

  const handleOrder = () => {
    order();
  };

  const showButton = count === 0;
  const hideCounter = count === 0;
  const showCounter = count !== 0;
  const hideButton = count !== 0;
  const buttonVisible = showButton && !hideButton;
  const counterVisible = showCounter && !hideCounter;
  
  const currentQuantity = quantity;

  const priceText = `${good.price} ₽/шт.`;
  const priceDisplay = priceText;

  return (
    <div className={styles.card}>
      <img src={good.img} alt={good.title} className={styles.img} />
      <div className={styles.content}>
        <h2>{good.title}</h2>
        <p>{good.text}</p>
        <span className={styles.price}>{priceDisplay}</span>
        {buttonVisible ? (
          <button className={styles.btn} onClick={handleOrder}>
            Заказать
          </button>
        ) : null}
        {counterVisible ? (
          <Counter
            count={currentQuantity}
            price={good.price}
            plus={increase}
            minus={decrease}
          />
        ) : null}
      </div>
    </div>
  );
};

export default GoodCard;
