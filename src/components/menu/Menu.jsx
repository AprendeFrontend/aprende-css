'use client';
import { MENU } from '@/constants/menu';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import styles from './menu.module.css';
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.classList.add('menu-open');
    else document.body.classList.remove('menu-open');
  }, [isOpen]);

  return (
    <div className={`${styles['menu-container']} ${isOpen && styles['menu-container-show']}`}>
      {isOpen ? (
        <IoMdClose className='icon' onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <IoMdMenu className='icon' onClick={() => setIsOpen(!isOpen)} />
      )}
      <nav>
        <ul className={styles['menu']}>
          {MENU.map(menu => (
            <li key={menu.id} className={styles['menu-item']}>
              <Link href={menu.path} className={styles['menu-link']} onClick={() => setIsOpen(false)}>
                {menu.title}
              </Link>
              {menu.submenu && (
                <ul className={styles['submenu']}>
                  {menu.submenu.map(submenu => (
                    <li key={submenu.id} className={styles['submenu-item']}>
                      <Link href={submenu.path} className={styles['submenu-link']} onClick={() => setIsOpen(false)}>
                        {submenu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
