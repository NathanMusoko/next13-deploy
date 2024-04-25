import Image from "next/image";
import styles from '../styles/Index.module.css'
import profileImg from '../assets/profile.jpg'
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Home() {
    
    return <section className={styles.home}>
    <div className={`${styles.home_container} ${styles.container}`}>
        <p className={`${styles.home_subtitle} ${styles.text_cs}`}>
            Hello, <span>My Name Is</span>
        </p>

        <h1 className={`${styles.home_title} ${styles.text_cs}`}>
            <span>NATHAN</span> MUSOKO
        </h1>

        <p className={styles.home_job}>
            <span className={styles.text_cs}>I Am</span> <b>A Web Developer</b>
        </p>
        <div className={styles.home_img_wrapper}>
            <div className={styles.home_banner}>
                <Image src={profileImg} alt="profilephoto" className={styles.home_profile}/>
            </div>
            <p className={`${styles.home_data} ${styles.home_data_one}`}>
                <span className={styles.text_lg}>
                    3 <b>+</b>
                </span>
                <span className={`${styles.text_sm} ${styles.text_cs}`}>
                    Years of <b>Experience</b>
                </span>
            </p>

            <p className={`${styles.home_data} ${styles.home_data_two}`}>
                <span className={styles.text_lg}>14</span>             
                <span className={`${styles.text_sm} ${styles.text_cs}`}>
                    Completed <span>Projects</span>
                </span>
            </p>
        </div>
        <p className={styles.home_text}>
        I&apos;m a passionate and creative web developer with expertise in both frontend and backend technologies. 
        Proficient in HTML, CSS, JavaScript, React, and Node.js, I thrive on solving complex technical challenges. 
        With a keen eye for detail, I deliver clean, efficient, and well-documented code. 
        </p>
        <div className={styles.home_socials}>
            <a href="https://www.linkedin.com/in/nathan-musoko-3030a424a/" className={styles.home_social_link}>
                <FaTwitter/>
            </a>
            <a href="https://www.linkedin.com/in/nathan-musoko-3030a424a/" className={styles.home_social_link}>
                <FaInstagram/>
            </a>
            <a href="https://www.linkedin.com/in/nathan-musoko-3030a424a/" className={styles.home_social_link}>
                <FaLinkedin/>
            </a>
        </div>
        <div className={styles.home_btns}>
            <Link href="/CVNathan.pdf" download="CVNathan.pdf" className={`${styles.btn} ${styles.text_cs}`}>Download CV</Link>
            <Link href="/skills" className={`${styles.hero_link} ${styles.text_cs}`}>My Skills</Link>
        </div>
    </div>
  </section>
}
