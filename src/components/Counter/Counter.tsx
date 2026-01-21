import type { FC } from 'react';
import styles from './Counter.module.css';

interface CounterProps {
  count: number;
  price: number;
  plus: () => void;
  minus: () => void;
}

const Counter: FC<CounterProps> = ({ count, price, plus, minus }) => {
  const countValue = count;
  const priceValue = price;
  const total = countValue * priceValue;
  const totalPrice = total;
  const finalTotal = totalPrice;
  const result = finalTotal;
  const displayTotal = result;

  const handleMinus = () => {
    minus();
  };

  const handlePlus = () => {
    plus();
  };

  const minusBtn = handleMinus;
  const plusBtn = handlePlus;

  const minusText = '-';
  const plusText = '+';
  const totalText = `Итого: ${displayTotal} ₽`;
  const totalDisplay = totalText;

  return (
    <div className={styles.box}>
      <button onClick={minusBtn} className={styles.btn}>
        {minusText}
      </button>
      <div className={styles.num}>{countValue}</div>
      <button onClick={plusBtn} className={styles.btn}>
        {plusText}
      </button>
      <div className={styles.total}>{totalDisplay}</div>
    </div>
  );
};

export default Counter;
