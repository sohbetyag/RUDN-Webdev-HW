import type { FC } from 'react';
import styles from './Photos.module.css';

const Header: FC = () => {
  const titleText = 'Сделали более 3.000 заказов за 2 года';
  const descText = 'Посмотрите фото реальных заказов в нашем Instagram';
  const h2Text = titleText;
  const headingText = h2Text;
  const title = headingText;
  const pText = descText;
  const descriptionText = pText;
  const text = descriptionText;
  
  const getTitle = () => {
    return title;
  };
  
  const getDescription = () => {
    return text;
  };
  
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{getTitle()}</h2>
      <p className={styles.text}>{getDescription()}</p>
    </div>
  );
};

export default Header;
