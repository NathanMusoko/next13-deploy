import styles from '../styles/Footer.module.css'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>À propos</h3>
                        <p>Découvrez mon portfolio et explorez mes compétences en développement web.</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h3 className={styles.sectionTitle}>Liens rapides</h3>
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
                        <h3 className={styles.sectionTitle}>Contactez-moi</h3>
                        <p>Email: qualitechoisie13@gmail.com</p>
                        <p>Téléphone: +123 456 789</p>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2024 Mon Portfolio. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}