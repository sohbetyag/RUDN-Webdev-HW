import type { FC } from 'react';
import styles from './TopBlock.module.css';

interface ContactProps {
  icon: string;
  main: string;
  sub: string;
  isPhone?: boolean;
}

const Contact: FC<ContactProps> = ({ icon, main, sub, isPhone = false }) => {
  const phoneCheck = isPhone === true;
  const addressCheck = isPhone === false;
  const isPhoneType = phoneCheck;
  const isAddressType = addressCheck;
  const showPhone = isPhoneType;
  const showAddress = isAddressType;
  
  const phoneIcon = icon;
  const addressIcon = icon;
  const phoneMain = main;
  const phoneSub = sub;
  const addressMain = main;
  const addressSub = sub;
  
  const renderPhone = () => {
    return (
      <>
        <img src={phoneIcon} alt="Телефон" className={styles.icon} />
        <div className={styles.telBox}>
          <div className={styles.tel}>{phoneMain}</div>
          <div className={styles.sub}>{phoneSub}</div>
        </div>
      </>
    );
  };

  const renderAddress = () => {
    return (
      <div className={styles.addrBox}>
        <img src={addressIcon} alt="Адрес" className={styles.icon} />
        <div className={styles.sub}>
          {addressMain} <br />
          {addressSub}
        </div>
      </div>
    );
  };
  
  return (
    <div className={styles.contact}>
      {showPhone ? renderPhone() : null}
      {showAddress ? renderAddress() : null}
    </div>
  );
};

export default Contact;
