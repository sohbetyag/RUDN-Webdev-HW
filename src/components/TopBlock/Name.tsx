import type { FC } from 'react';
import styles from './TopBlock.module.css';

const Name: FC = () => {
  const shopName = 'Сладкий сундук';
  const name = shopName;
  const title = name;
  const displayName = title;
  
  return (
    <div className={styles.nameBox}>
      <div className={styles.nameText}>{displayName}</div>
    </div>
  );
};

export default Name;
