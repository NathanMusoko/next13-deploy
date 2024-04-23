import styles from '../styles/Footer.module.css'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>About</h3>
                        <p>Explore my portfolio and discover my skills in web development.</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Quick Links</h3>
                        <ul className={styles.quickLinks}>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/serv'>Services</Link>
                            </li>
                            <li>
                                <Link href='/skills'>Skills</Link>
                            </li>
                            <li>
                                <Link href='/portfolio'>Porfolio</Link>
                            </li>
                            <li>
                                <Link href='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Contact Me</h3>
                        <p>Email: qualitechoisie13@gmail.com</p>
                        <p>Téléphone: +123 456 789</p>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy;MUSOKO 2024 My Portfolio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}