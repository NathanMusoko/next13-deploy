import styles from "../styles/Header.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { animateScroll } from "react-scroll";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);

    const scrollTop = () => {
        animateScroll.scrollToTop();
    };

    const changNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changNav);
    }, [showMenu]);

    useEffect(() => {
        document.body.classList.toggle("no-scroll", showMenu);
    }, [showMenu]);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleLinkClick = () => {
        setShowMenu(false); // Close the menu when a link is clicked
    };

    return (
        <header className={`${scrollNav ? `${styles.scroll_header}` : ""} ${styles.header}`}>
            <nav className={styles.nav}>
                <Link href="/" className={`${styles.nav_logo} ${styles.text_cs}`}>
                    NATHAN
                </Link>
                <div className={`${showMenu ? `${styles.nav_menu} ${styles.show_menu}` : styles.nav_menu}`}>
                    <div className={styles.nav_data}>
                        <ul className={styles.nav_list}>
                            <li>
                                <Link href="/" className={`${styles.nav_link} ${styles.text_cs}`} onClick={handleLinkClick}>
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className={`${styles.nav_link} ${styles.text_cs}`} onClick={handleLinkClick}>
                                    SERVICES
                                </Link>
                            </li>
                            <li>
                                <Link href="/skills" className={`${styles.nav_link} ${styles.text_cs}`} onClick={handleLinkClick}>
                                    SKILLS
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className={`${styles.nav_link} ${styles.text_cs}`} onClick={handleLinkClick}>
                                    PORTFOLIO
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className={`${styles.nav_link} ${styles.text_cs}`} onClick={handleLinkClick}>
                                    CONTACT
                                </Link>
                            </li>
                            <div className={styles.header_socials}>
                                <a href="https://www.linkedin.com/in/nathan-musoko-3030a424a/" className={styles.header_social_link}>
                                    <FaTwitter />
                                </a>
                                <a href="https://www.linkedin.com/in/nathan-musoko-3030a424a/" className={styles.header_social_link}>
                                    <FaInstagram />
                                </a>
                                <a href="https://www.linkedin.com/in/nathan-musoko-3030a424a/" className={styles.header_social_link}>
                                    <FaLinkedin />
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={styles.nav_btns}>
                    <div className={styles.theme_toggler}>
                        <BsSun />
                    </div>
                    <div className={`${showMenu ? `${styles.nav_toggle} ${styles.animate_toggle}` : styles.nav_toggle}`} onClick={handleMenuToggle}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
}
