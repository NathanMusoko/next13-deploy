import styles from '../styles/Resume.module.css'

export default function Card(props){
    return <div className={styles.resume_item}>
        <div className={styles.resume_header}>
            <h3 className={styles.resume_subtitle}>{props.title}</h3>
            <span className={styles.resume_icon}>-</span>
        </div>

        <div className={styles.resume_content}>
            <div className={styles.resume_date_title}>
                <h3 className={styles.resume_title}>{props.subtitle}</h3>
                <span className={`${styles.resume_date} ${styles.text_cs}`}>{props.date}</span>
            </div>
        </div>

        <p className={styles.resume_description}>{props.description}</p>
    </div>
}