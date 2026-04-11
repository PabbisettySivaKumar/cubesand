'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <img src="/cubesand.png" alt="CubeSand Logo" width="32" height="32" style={{marginRight: '8px', borderRadius: '4px'}} />
          CUBESAND
        </Link>
        
        {/* Desktop Menu */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/products" className={styles.navLink}>Products</Link>
          <Link href="/infrastructure" className={styles.navLink}>Infrastructure</Link>
          <Link href="/compliance" className={styles.navLink}>Compliance</Link>
          <Link href="/contact" className={`btn btn-primary ${styles.contactBtn}`}>Get Quote</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileNav}>
          <Link href="/" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/products" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/infrastructure" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Infrastructure</Link>
          <Link href="/compliance" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Compliance</Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default NavBar;
