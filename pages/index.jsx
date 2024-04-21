import Image from "next/image";
import styles from '../styles/Index.module.css'
import profileImg from '../assets/profile.jpg'
import shapeOne from '../assets/shape-1.png'
import shapeTwo from '../assets/shape-2.png'

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
            <span className={styles.text_cs}>I Am</span> <b>Web Developer</b>
        </p>
        <div className={styles.home_img_wrapper}>
            <div className={styles.home_banner}>
                <Image src={profileImg} alt="profilephoto" className={styles.home_profile}/>
            </div>
            <p className={`${styles.home_data} ${styles.home_data_one}`}>
                <span className={styles.text_lg}>
                    6 <b>+</b>
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
        I'm a passionate and creative web developer with expertise in both frontend and backend technologies. 
        Proficient in HTML, CSS, JavaScript, React, and Node.js, I thrive on solving complex technical challenges. 
        With a keen eye for detail, I deliver clean, efficient, and well-documented code. 
        A strong team player, I excel in collaborative environments and am always eager to learn and grow in the ever-evolving field of web development
        </p>
        <div className={styles.home_socials}>
            <a href="" className={styles.home_social_link}>
                <FaTwitter/>
            </a>
            <a href="" className={styles.home_social_link}>
                <FaInstagram/>
            </a>
            <a href="" className={styles.home_social_link}>
                <FaLinkedin/>
            </a>
        </div>
        <div className={styles.home_btns}>
            <a href="/CVNathan.pdf" download="CVNathan.pdf" className={`${styles.btn} ${styles.text_cs}`}>Download CV</a>
            <a href="/skills" className={`${styles.hero_link} ${styles.text_cs}`}>My Skills</a>
        </div>
    </div>
  </section>
}
