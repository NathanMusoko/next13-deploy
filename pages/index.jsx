import Image from "next/image";
import styles from '../styles/Index.module.css'
import profileImg from '../assets/bgprofile.jpg'
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Service from "../components/service/Service";
import Skill from "../components/skill/skill";
import Porfolios from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { Element } from 'react-scroll';
import Head from "next/head";


export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio | Home</title>
                <meta name="description" content="Passionate and creative web developer with expertise in both frontend and backend technologies" />

                <meta property="og:title" content="Porfolio | Home" />
                <meta property="og:description" content="I thrive on solving complex technical challenges" />
                <meta property="og:image" content="../assets/bgprofile.jpg" />
            </Head>
            <Element name="home" className={styles.home_container}>
                <div className={`${styles.home_container} ${styles.container}`}>
                    <p className={`${styles.home_subtitle} ${styles.text_cs}`}>
                        Hello, <span>My Name Is</span>
                    </p>

                    <h1 className={`${styles.home_title} ${styles.text_cs}`}>
                        <span>N</span>
                        <span>A</span>
                        <span>T</span>
                        <span>H</span>
                        <span>A</span>
                        <span>N</span>
                        <span> </span>
                        <span className={styles.han}>M</span>
                        <span className={styles.han}>U</span>
                        <span className={styles.han}>S</span>
                        <span className={styles.han}>O</span>
                        <span className={styles.han}>K</span>
                        <span className={styles.han}>O</span>
                    </h1>

                    <p className={styles.home_job}>
                        <span className={styles.text_cs}>I Am</span> <b>A Web Developer</b>
                    </p>
                    <div className={styles.home_img_wrapper}>
                        <div className={styles.home_banner}>
                            <Image src={profileImg} alt="profilephoto" className={styles.home_profile} />
                        </div>
                        <p className={`${styles.home_data} ${styles.home_data_one}`}>
                            <span className={styles.text_lg}>
                                5 <b>+</b>
                            </span>
                            <span className={`${styles.text_sm} ${styles.text_cs}`}>
                                Years of <b>Experience</b>
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
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/nathan-musoko-3030a424a/" className={styles.home_social_link}>
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/nathan-musoko-3030a424a/" className={styles.home_social_link}>
                            <FaLinkedin />
                        </a>
                    </div>
                    <Link href="/CVNathan.pdf" download="CVNathan.pdf">
                        <button className={`${styles.w3Button}`}>
                            <FontAwesomeIcon icon={faDownload} /> Download Resume
                        </button>
                    </Link>
                </div>
            </Element>

            <Element name="services">
                <Service />
            </Element>

            <Element name="skills">
                <Skill />
            </Element>

            <Element name="portfolio">
                <Porfolios />
            </Element>

            <Element name="contact">
                <Contact />
            </Element>
        </>
    );
}

