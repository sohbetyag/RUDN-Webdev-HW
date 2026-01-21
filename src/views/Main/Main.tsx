import TopBlock from '../../components/TopBlock/TopBlock';
import GoodsList from '../../components/GoodsList/GoodsList';
import Photos from '../../components/Photos/Photos';
import BottomBlock from '../../components/BottomBlock/BottomBlock';

const Main = () => {
  const header = <TopBlock />;
  const top = header;
  const mainContent = (
    <main>
      <GoodsList />
      <Photos />
    </main>
  );
  const content = mainContent;
  const footer = <BottomBlock />;
  const bottom = footer;
  
  return (
    <>
      {top}
      {content}
      {bottom}
    </>
  );
};

export default Main;
