import { useRef, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import CustomNavLink from '../CustomNavLink/CustomNavLink';
import styles from './Header.module.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsNavOpen(false);
  };

  // Navbar
  const navigationRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(navigationRef, handleCloseNavbar);

  const toggleNav = () => {
    setIsNavOpen((state) => !state);
  };

  return (
    <header className={styles.Header}>
      <div className={`container ${styles.navWrapper}`}>
        <Link to="/" className={styles.heading}>
          Youtube Analyzer
        </Link>
        <button
          type="button"
          onClick={toggleNav}
          className={styles.mobileNavToggle}
          aria-controls="primary-navigation"
        >
          {!isNavOpen ? <RxHamburgerMenu /> : <MdOutlineClose />}
          <span className="visually-hidden">Menu</span>
        </button>

        {/* Div is used to provide backdrop shadow */}
        <div
          className={`${styles.backdrop} ${
            isNavOpen ? styles.backdropOpen : ''
          }`}
        >
          {' '}
        </div>

        <nav
          ref={navigationRef}
          className={`${styles.primaryNavigation} ${
            isNavOpen ? styles.primaryNavigationOpen : ''
          }`}
        >
          <ul className={styles.navList} id="primary-navigation">
            <CustomNavLink
              path="/"
              onClickCallback={handleCloseNavbar}
              className={styles.navItem}
              activeClassName={styles.navItemActive}
            >
              Home
            </CustomNavLink>
            <CustomNavLink
              path="/analyze"
              onClickCallback={handleCloseNavbar}
              className={styles.navItem}
              activeClassName={styles.navItemActive}
            >
              Analyze
            </CustomNavLink>
            <CustomNavLink
              path="/recommend-video"
              onClickCallback={handleCloseNavbar}
              className={styles.navItem}
              activeClassName={styles.navItemActive}
            >
              Movie Recommendation
            </CustomNavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
