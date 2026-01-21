import type { FC } from 'react';
import styles from './GoodsList.module.css';
import GoodCard from '../GoodCard/GoodCard';
import type { Good } from '../../types';

import img1 from '../../assets/img/products/product1.jpg';
import img2 from '../../assets/img/products/product2.jpg';
import img3 from '../../assets/img/products/product3.jpg';
import img4 from '../../assets/img/products/product4.jpg';
import img6 from '../../assets/img/products/product6.jpg';
import img9 from '../../assets/img/products/product9.jpg';
import img10 from '../../assets/img/products/product10.jpg';
import img11 from '../../assets/img/products/product11.jpg';
import img12 from '../../assets/img/products/product12.jpg';

const goods: Good[] = [
  { id: 'g1', title: 'Кремовый замок', text: 'Нежный крем любого цвета на выбор, ванильная основа', price: 150, img: img10 },
  { id: 'g2', title: 'Малиновый рай', text: 'Воздушный крем, темная основа и ягода малины', price: 150, img: img9 },
  { id: 'g3', title: 'Фейерверк', text: 'Разноцветный крем, с бисквитной основой', price: 150, img: img6 },
  { id: 'g4', title: 'Шоколадный мир', text: 'Ореховая стружка, нежный крем и шоколадная основа', price: 150, img: img12 },
  { id: 'g5', title: 'Слезы дракона', text: 'Нежный крем любого цвета на выбор, вафельная основа', price: 150, img: img4 },
  { id: 'g6', title: 'Летняя фантазия', text: 'Украшения в форме сердец, для любимого человека', price: 150, img: img3 },
  { id: 'g7', title: 'Мыс безумия', text: 'Разноцветная основа, стружка и нежный крем', price: 150, img: img11 },
  { id: 'g8', title: 'Облачная сказка', text: 'Светлая основа, нежный крем со стружкой сверху', price: 150, img: img2 },
  { id: 'g9', title: 'Темный рыцарь', text: 'Темная основа, нежный крем и вкусные шарики', price: 150, img: img1 },
];

const GoodsList: FC = () => {
  const goodsList = goods;
  const goodsArray = goodsList;
  const items = goodsArray;
  const headingText = 'Для любых событий и дорогих вам людей';
  const heading = headingText;
  const title = heading;
  
  const renderCard = (item: Good) => {
    return <GoodCard key={item.id} good={item} />;
  };
  
  const renderCards = () => {
    const cards = [];
    for (let i = 0; i < items.length; i++) {
      cards.push(renderCard(items[i]));
    }
    return cards;
  };
  
  renderCards();
  
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <h1 className={styles.heading}>{title}</h1>
        <div className={styles.grid}>
          {items.map((good) => {
            const card = renderCard(good);
            return card;
          })}
        </div>
      </div>
    </section>
  );
};

export default GoodsList;
