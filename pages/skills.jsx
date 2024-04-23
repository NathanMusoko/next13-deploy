import styles from '../styles/Skills.module.css'
import Data from '../datalist/Data'

const skills = Data().projects;

export default function Skills(){
    return <section className={`${styles.skills} ${styles.section}`}>
        <h2 className={`${styles.section_title} ${styles.text_cs}`}>Professional skills</h2>
        <p className={styles.section_subtitle}>
            My <span>Talent</span>
        </p>
        <div className={`${styles.skills_container} ${styles.container} ${styles.grid}`}>
            {skills.map(({name, percentage, description}, index) => {
                return <div className={styles.skills_item} key={index}>
                    <div className={styles.skills_titles}>                       
                        <h3 className={styles.skills_name}>{name}</h3>
                        <span className={styles.skills_number}>
                            {percentage} <span>%</span>
                        </span>                                       
                    </div>
                    <p className={styles.skills_description}>{description}</p>
                        <div className={styles.skills_bar}>
                            <span className={styles.skills_percentage} style={{width: `${percentage}%`}}>
                                <span></span>
                            </span>
                        </div>
                    </div>
            } )}
        </div>
    </section>
}