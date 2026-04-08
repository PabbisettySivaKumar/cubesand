import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.column}>
          <h3 className={styles.brand} style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/cubesand.png" alt="CubeSand Logo" width="32" height="32" style={{marginRight: '12px', borderRadius: '4px'}} />
            CubeSand
          </h3>
          <p className={styles.description}>
            Leading supplier of high-quality stone aggregates, M-sand, and crusher dust for infrastructure and civil construction projects.
          </p>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.list}>
            <li><Link href="/" className={styles.link}>Home</Link></li>
            <li><Link href="/about" className={styles.link}>About Us</Link></li>
            <li><Link href="/products" className={styles.link}>Products</Link></li>
            <li><Link href="/infrastructure" className={styles.link}>Infrastructure</Link></li>
            <li><Link href="/compliance" className={styles.link}>Compliance</Link></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.heading}>Contact Us</h4>
          <ul className={styles.list}>
            <li className={styles.contactItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +91-9562347777
            </li>
            <li className={styles.contactItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              sufiyan@cubicsglobal.in
            </li>
            <li className={styles.contactItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              123 Quarry Road, Industrial Area, State
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p>&copy; {new Date().getFullYear()} CubeSand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
