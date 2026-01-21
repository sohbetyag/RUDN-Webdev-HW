import type { FC } from 'react';
import styles from './Photos.module.css';
import Header from './Header';
import Grid from './Grid';

const Photos: FC = () => {
  return (
    <section className={styles.photos}>
      <Header />
      <Grid />
    </section>
  );
};

export default Photos;
