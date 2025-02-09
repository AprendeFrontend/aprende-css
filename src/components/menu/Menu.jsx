import Link from 'next/link';
import styles from './menu.module.css';
const Menu = () => {
  return (
    <nav>
      <ul className={styles['menu']}>
        <li>
          <Link href='/'>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
