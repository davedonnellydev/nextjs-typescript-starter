// src/components/layout/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  className?: string;
}

export function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.container}>
        <div className={styles.py8}>
          <div className={styles.row}>
            <div className={styles.copyright}>
              © 2024 Next.js TypeScript Starter. All rights reserved.
            </div>
            <div className={styles.links}>
              <a href="/privacy" className={styles.link}>
                Privacy Policy
              </a>
              <a href="/terms" className={styles.link}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}