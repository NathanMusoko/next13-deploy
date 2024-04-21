import styles from '../styles/Portfolio.module.css'
import List from './list';
import Items from './items';
import Data from './Data';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const projects = Data().skills;

const allNavList = [
    'all', 
    ...new Set(projects.map((project) => project.category))
];

export default function Porfolio(){

    const [projectItems, setMenuItems] = useState(projects);
    const [navList, setCatgeries] = useState(allNavList);

    const filterItems = (category) => {
        if(category === 'all'){
            setMenuItems(projects);
            return;
        }
        const newProjectItems = projects.filter((item) => item.category === category);

        setMenuItems(newProjectItems);
    }

    return <section className={`${styles.portfolio} ${styles.section}`}>
        <h2 className={`${styles.section_title} ${styles.text_cs}`}>Portfolio</h2>
        <p className={styles.section_subtitle}>
            My <span>Cases</span>
        </p>

        <List list = {navList} filterItems={filterItems} />

        <div className={`${styles.portfolio_container} ${styles.container} ${styles.grid}`}>
            <AnimatePresence initial={false}>
                <Items projectItems = {projectItems}/>
            </AnimatePresence>
        </div>
</section>
}

