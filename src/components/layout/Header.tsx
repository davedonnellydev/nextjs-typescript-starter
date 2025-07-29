import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  title?: string;
  className?: string;
}

export function Header({ title = 'Next.js App', className = '' }: HeaderProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <h1 className={styles.title}>{title}</h1>
          </div>
          <nav className={styles.nav}>
            <a href="/" className={styles.navLink}>
              Home
            </a>
            <a href="/about" className={styles.navLink}>
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}