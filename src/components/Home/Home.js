// Hooks
import React, { useEffect, useState } from 'react';
// Home styles
import styles from './Home.module.css';
// Router Link
import { Link } from 'react-router-dom';


const Home = () => {
   //  Animation
   const items = ["Designer" , 'Freelance' , 'Developer'];
   const [currentIndex , setCurrentIndex] = useState(0);
     useEffect( () => {
       const interval = setInterval( () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1)% items.length) // 3 % 3 = 0 
       }, 3000)

       return () => clearInterval(interval)

     }, [])
    return (
       <section id='home'>
          <div className="container">
             <div className={styles.home}>
                 <div className={styles['home-content']}>
                     <div className={styles['home-title']}>
                        <h2>Hey , I' m </h2>
                        <h1>Mohaymen</h1>
                     </div>
                       <div className={styles['text-wrapper']}>
                          <p>
                            Creative  <span className={styles.items}>
                              {items[currentIndex]}
                            </span>
                            </p>
                       </div>
                       <div className={styles.links}>

                          <div className={styles.link}>
                             <Link to="/projects">View Projects</Link>
                          </div>

                          <span className={styles.divider}> Or </span>

                          <div className={styles.link}>
                             <Link to="/about">Read About Me</Link>
                          </div>

                       </div>

                         <div className={styles.scroll}>
                            <Link to="/about">
                                <span></span>
                            </Link>
                         </div>
                 </div>
                 <div className={styles.circle}>
                     <div className={styles.content}>
                        <img src="./images/mohaymen.jpg" alt="mohayman " />
                         <h2>Mohaymen Islam 
                            <br /> <span /> Web Developer </h2>
                          <Link to='/contact'>Hire Me</Link>
                     </div>
                 </div>
             </div>
          </div>
       </section>
    );
};

export default Home;