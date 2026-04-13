import React from 'react';
import Link from 'next/link';
import Icon from './Icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.column}>
          <h3 className={styles.brand} style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/cubesand.png" alt="CubeSand Logo" width="32" height="32" style={{marginRight: '12px', borderRadius: '4px'}} />
            CUBESAND
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
              <Icon name="phone" size={20} className={styles.icon} />
              <a href="tel:+919562347777" className={styles.link}>+91-9562347777</a>
            </li>
            <li className={styles.contactItem}>
              <Icon name="mail" size={20} className={styles.icon} />
              <a href="mailto:sufiyan@cubicsglobal.in" className={styles.link}>sufiyan@cubicsglobal.in</a>
            </li>
            <li className={styles.contactItem}>
              <Icon name="mapPin" size={20} className={styles.icon} />
              123 Quarry Road, Industrial Area, State
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} CubeSand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
