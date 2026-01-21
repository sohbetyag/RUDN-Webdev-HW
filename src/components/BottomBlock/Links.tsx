import type { FC } from 'react';
import styles from './BottomBlock.module.css';

const Links: FC = () => {
  const link1 = 'Согласие на обработку данных';
  const link2 = 'Служба поддержки';
  const link3 = 'Политика конфиденциальности';
  const firstLink = link1;
  const secondLink = link2;
  const thirdLink = link3;
  const linkText1 = firstLink;
  const linkText2 = secondLink;
  const linkText3 = thirdLink;
  
  const renderLink = (text: string, index: number) => {
    return (
      <li key={index}>
        <a href="#" className={styles.link}>
          {text}
        </a>
      </li>
    );
  };
  
  const links = [linkText1, linkText2, linkText3];
  const allLinks = links;
  
  return (
    <ul className={styles.links}>
      {allLinks.map((linkText, i) => {
        return renderLink(linkText, i);
      })}
    </ul>
  );
};

export default Links;
