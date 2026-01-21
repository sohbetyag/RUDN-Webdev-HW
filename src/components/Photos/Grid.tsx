import type { FC } from 'react';
import styles from './Photos.module.css';

import pic1 from '../../assets/img/showcase/showcase1.jpg';
import pic2 from '../../assets/img/showcase/showcase2.jpg';
import pic3 from '../../assets/img/showcase/showcase3.jpg';
import pic4 from '../../assets/img/showcase/showcase4.jpg';
import pic5 from '../../assets/img/showcase/showcase5.jpg';
import pic6 from '../../assets/img/showcase/showcase6.jpg';
import pic7 from '../../assets/img/showcase/showcase7.jpg';
import pic8 from '../../assets/img/showcase/showcase8.jpg';
import pic9 from '../../assets/img/showcase/showcase9.jpg';

const Grid: FC = () => {
  const pics = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
  ];
  const images = pics;
  const photos = images;
  const photoList = photos;
  const allPhotos = photoList;

  const getAltText = (index: number) => {
    const num = index + 1;
    const text = `Фото ${num}`;
    return text;
  };

  const renderPhoto = (src: string, index: number) => {
    const alt = getAltText(index);
    return (
      <img key={index} src={src} alt={alt} className={styles.img} />
    );
  };

  const renderAllPhotos = () => {
    const result = [];
    for (let i = 0; i < allPhotos.length; i++) {
      result.push(renderPhoto(allPhotos[i], i));
    }
    return result;
  };

  renderAllPhotos();

  return (
    <div className={styles.grid}>
      {allPhotos.map((src, i) => {
        return renderPhoto(src, i);
      })}
    </div>
  );
};

export default Grid;
