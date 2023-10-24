import React, { useEffect, useRef, useState } from 'react';
import styles from './Skills.module.css';
import SkillBar from './SkillBar/SkillBar';
import Reveal from '../Reveal/Reveal';
import { Link } from 'react-router-dom';

// @@@@@@@@@@@@@@@@ SkillsApi @@@@@@@@@@@ 

const skillsData = [
    {
        label: 'Javascript' ,
        percentage: 90,
        style: `${styles["progress-line"]} ${styles.js}`,
    },
    {
        label: 'React' ,
        percentage: 80,
        style: `${styles["progress-line"]} ${styles.react}`,
    },
    {
        label: 'Css' ,
        percentage: 85,
        style: `${styles["progress-line"]} ${styles.css}`,
    },
    {
        label: 'Bootstrap' ,
        percentage: 60,
        style: `${styles["progress-line"]} ${styles.Bootstrap}`,
    },
    {
        label: 'Tailwind CSS' ,
        percentage: 50,
        style: `${styles["progress-line"]} ${styles.Tailwind}`,
    },
    {
        label: 'Figma' ,
        percentage: 30,
        style: `${styles["progress-line"]} ${styles.figma}`,
    },
];



const Skills = () => {
// @@@@@@@@@@@@@@ condition 
    const[isInterSection , setIsInterSection] = useState(false);
     const sectionRef = useRef(null);

     useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: 0.15 , 
        };

            
            const handleInterSection = (entries , observer) => {
                const [entry] = entries;
                if(entry.isIntersecting){
                    setIsInterSection(true);
                    observer.unobserve(entry.target);
                }
             }

             const observer = new IntersectionObserver(handleInterSection , options);
             observer.observe(sectionRef.current);

             return () => {
                observer.disconnect()
             }

     }, [])

    return (
       <section id='skills' className={styles.skills} ref={sectionRef}>
        <Reveal>
          <div className="container">
             <div className={styles.title}>
                 <h2> <span>My</span> Skills </h2>
                 <hr />
             </div>
               <div className={`grid ${styles['skills-grid']}`}>
                    <div className={styles.content}>
                        <h1>
                            In <span>Designing</span> 
                            <br />
                            And <span>Developing</span>
                        </h1>
                        <p>Every day is a new challenge, and I'm trying to gain more knowledge and experience. Learning new technologies has always been interesting to me. As technology is evolving so fast, I try to keep myself up to date.</p>
                    </div>
                    <div className={styles['skill-bars']}> 

                    {/* @@@@@@@@@@@@@@@ skill api Map */}

                       {
                        skillsData.map((skill) => (
                            <SkillBar key={skill.label} 
                             label={skill.label}
                             percentage={skill.percentage}
                             style={isInterSection ? skill.style : ''}
                            >

                            </SkillBar>
                        ))
                       }

                      
                     </div>
               </div>
          </div>
             <div className={styles.bottom}>
                <div className={`${styles.flex} container`}>
                     <div>
                        <h3> I ' m available for work</h3>
                     </div>
                     <div>
                        <Link to="/contact">Contact Me</Link>
                     </div>
                </div>
             </div>
             </Reveal>
       </section>
    );
};

export default Skills;


