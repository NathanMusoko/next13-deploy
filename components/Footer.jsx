import styles from '../styles/Footer.module.css'

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
                            <li><a href="/">Home</a></li>
                            <li><a href="/serv">Services</a></li>
                            <li><a href="/skills">Skills</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/contact">Contact</a></li>
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