import type { FC } from 'react';
import styles from './BottomBlock.module.css';
import Links from './Links';
import Copyright from './Copyright';

const BottomBlock: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.box}>
        <div className={styles.content}>
          <Links />
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default BottomBlock;
