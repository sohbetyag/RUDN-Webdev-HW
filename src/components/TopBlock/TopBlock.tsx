import type { FC } from 'react';
import styles from './TopBlock.module.css';
import addrIcon from '../../assets/img/icons/address.png';
import telIcon from '../../assets/img/icons/phone.png';
import Name from './Name';
import Contact from './Contact';

const TopBlock: FC = () => {
  const addr = addrIcon;
  const addressIcon = addr;
  const tel = telIcon;
  const phoneIcon = tel;
  const addrIcon2 = addressIcon;
  const telIcon2 = phoneIcon;
  
  const addressText1 = "г. Санкт Петербург,";
  const addressText2 = "ул. Куйбышева 31";
  const phoneText1 = "8 (812) 844-95-49";
  const phoneText2 = "Ежедневно с 9:00 до 20:00";
  
  return (
    <header className={styles.top}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <Name />
          <div className={styles.contacts}>
            <Contact
              icon={addrIcon2}
              main={addressText1}
              sub={addressText2}
            />
            <Contact
              icon={telIcon2}
              main={phoneText1}
              sub={phoneText2}
              isPhone={true}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBlock;
