import type { FC } from 'react';
import styles from './BottomBlock.module.css';

const Copyright: FC = () => {
  const year = 2054;
  const currentYear = year;
  const site = 'nazvaniesaita.ru';
  const siteName = site;
  const website = siteName;
  const companyInfo = 'Название компании или ИП ОГРН 0000000000000';
  const info = companyInfo;
  
  const getYear = () => {
    return currentYear;
  };
  
  const getSite = () => {
    return website;
  };
  
  const getInfo = () => {
    return info;
  };
  
  const copyrightSymbol = '©';
  const symbol = copyrightSymbol;
  const separator = ' | ';
  const sep = separator;
  
  const text = `${symbol} ${getSite()}, ${getYear()}${sep}${getInfo()}`;
  const copyrightText = text;
  const displayText = copyrightText;
  
  return (
    <p className={styles.copyright}>
      {displayText}
    </p>
  );
};

export default Copyright;
