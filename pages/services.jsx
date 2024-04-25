import Image from 'next/image';
import styles from '../styles/Services.module.css';
import Data from '../datalist/Data';
import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from '../assets/shape-2.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const servicesData = Data().services;

export default function Services() {


  return <div className={`${styles.services} ${styles.section}`}>
    <h2 className={`${styles.section_title} ${styles.text_cs}`}>What I Do</h2>
    <p className={styles.section_subtitle}>
      My <span>Services</span>
    </p>

    <Swiper
      pagination={true}
      breakpoints={{
        540: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}

      modules={[EffectCoverflow, Pagination]} className={`${styles.services_container} ${styles.container} ${styles.mySwiper}`}>
      {servicesData.map(({ name, title, description }, index) => {
        return <SwiperSlide className={`${styles.services_item} ${styles.card} ${styles.card_one}`} key={index}>
          <span className={`${styles.services_subtitle} ${styles.text_cs}`}>{name}</span>

          <h3 className={styles.services_title}>{title}</h3>
          <p className={styles.services_description}>{description}</p>


          <a href="" className={styles.link}>
            See Pricing
            <FaArrowRight className={styles.link_icon}></FaArrowRight>
          </a>
        </SwiperSlide>
      })}
    </Swiper>
  </div>
}