import Project1 from '../assets/project1.jpeg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.jpeg';
import Project4 from '../assets/project4.jpeg';
import Project5 from '../assets/project5.jpg';
import Project6 from '../assets/project6.jpg';

import Testimonial1 from '../assets/testimonial1.jpg';
import Testimonial2 from '../assets/testimonial2.jpg';
import Testimonial3 from '../assets/testimonial3.jpg';
import Testimonial4 from '../assets/testimonial4.jpg';
import Testimonial5 from '../assets/testimonial5.jpg';
import ads from '../assets/ads.svg'
import web from '../assets/web.svg'
import apps from '../assets/apps.svg'
import game from '../assets/game.svg'

const Data = () => {
  return {
    links: [{
      name: 'Home',
      path: 'home',
    },
    {
      name: 'Services',
      path: 'services',
    },
    {
      name: 'Skills',
      path: 'skills',
    },
    {
      name: 'Works',
      path: 'work',
    },
    {
      name: 'Resume',
      path: 'resume',
    },
    {
      name: 'Testimonials',
      path: 'testimonial',
    },
    {
      name: 'Pricing',
      path: 'pricing',
    },
    {
      name: 'Blog',
      path: 'blog',
    },
    {
      name: 'Contact',
      path: 'contact',
    },],

    services: [{
      id: 1,
      name: 'Web Development',
      title: 'Web Design & Logo',
      description:
        'Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.',
      image: web,
    },
    {
      id: 2,
      name: ' Apps Development ',
      title: ' iOS & Android ',
      description:
        'Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.',
      image: apps,
    },
    {
      id: 3,
      name: ' Game Development ',
      title: ' Unity & Unreal Engine ',
      description:
        ' Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ',
      image: game,
    },
    {
      id: 4,
      name: ' Advertising ',
      title: ' Google Ads ',
      description:
        ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
      image: ads,
    },],

    skills: [{
      id: 1,
      img: Project1,
      category: 'Branding',
      title: 'Zorro',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    {
      id: 2,
      img: Project2,
      category: 'UI UX Design',
      title: 'Gooir',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    {
      id: 3,
      img: Project3,
      category: 'Development',
      title: 'Explore',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    {
      id: 4,
      img: Project4,
      category: 'Photography',
      title: 'Mozar',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    {
      id: 5,
      img: Project5,
      category: 'Development',
      title: 'Stay Fit',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    {
      id: 6,
      img: Project6,
      category: 'Branding',
      title: 'Kana',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    },],

    projects: [{
      id: 1,
      name: 'HTML',
      percentage: 85,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      id: 2,
      name: 'JavaScript',
      percentage: 75,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      id: 3,
      name: 'CSS',
      percentage: 90,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      id: 4,
      name: 'Swift',
      percentage: 75,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      id: 5,
      name: 'React',
      percentage: 70,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },

    {
      id: 6,
      name: 'Java',
      percentage: 80,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },],

    cv: [{
      id: 1,
      title: 'CoderHouse Courses',
      subtitle: 'Backend Programming',
      date: '2014 - 2016',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'education',
    },

    {
      id: 2,
      title: 'Lviv National Academy of Arts',
      subtitle: 'Faculty of Design',
      date: '2012 - 2014',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'education',
    },

    {
      id: 3,
      title: 'IT Future',
      subtitle: 'High School',
      date: '2010 - 2012',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'education',
    },

    {
      id: 4,
      title: 'UI Head & Manager',
      subtitle: 'Soft Tech Inc.',
      date: '2020 - PRESENT',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'experience',
    },

    {
      id: 5,
      title: 'UI / UX Specialist',
      subtitle: 'Kana Design Studio',
      date: '2018 - 2020',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'experience',
    },

    {
      id: 6,
      title: 'Plugins Developer',
      subtitle: 'Fiverr.com',
      date: '2016 - 2018',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      category: 'experience',
    },],

    testimonials: [{
      id: 1,
      img: Testimonial1,
      name: 'Barbara Wilson',
      author: 'CEO Company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      img: Testimonial2,
      name: 'Charlie Smith',
      author: 'Designer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      img: Testimonial3,
      name: 'Roy Wang',
      author: 'Manager GYM',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 4,
      img: Testimonial4,
      name: 'Jennifer Smith',
      author: 'CEO & Founder',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 5,
      img: Testimonial5,
      name: 'Paul Freeman',
      author: 'Photographer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },]
  };
};

export default Data;

