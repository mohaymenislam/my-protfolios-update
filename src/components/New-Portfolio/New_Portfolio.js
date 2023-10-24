import React from 'react';
import "./Portfolio.css"
import Card from "./Card"

import Portfolio_data from "./Portfolio_data"

const New_Portfolio = () => {
    return (
        <>
            <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid-1'>
            {Portfolio_data.map((value, index) => {
              
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />

            })}

           
          </div>
        </div>
      </section>   
        </>
    );
};

export default New_Portfolio;





// import React from "react"
// 
// 
// 

// const Portfolio = () => {
//   return (
//     <>
      
//     </>
//   )
// }

// export default Portfolio