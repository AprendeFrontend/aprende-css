import Menu from '@/components/menu/Menu';
import styles from './page.module.css';
const Home = () => {
  return (
    <div className={styles['page']}>
      <Menu />
      <h1>Guía Interactiva De CSS</h1>
    </div>
  );
};

export default Home;
