'use client';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import styles from './menu.module.css';
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${styles['menu-container']} ${isOpen && styles['menu-container-show']}`}>
      {isOpen ? (
        <IoMdClose className='icon' onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <IoMdMenu className='icon' onClick={() => setIsOpen(!isOpen)} />
      )}
      <nav>
        <ul className={styles['menu']}>
          <li className={styles['menu-item']}>
            <Link href='/' className={styles['menu-link']}>
              Home
            </Link>
          </li>
          <li className={styles['menu-item']}>
            <Link href='/' className={styles['menu-link']}>
              Box Model
            </Link>
          </li>
          <li className={styles['menu-item']}>
            <Link href='/' className={styles['menu-link']}>
              Home
            </Link>
          </li>
          <li className={styles['menu-item']}>
            <Link href='/' className={styles['menu-link']}>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
