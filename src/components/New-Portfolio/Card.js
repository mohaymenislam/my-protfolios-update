import React, { useState } from "react"
import {FaTimes , FaChevronRight , FaThumbsUp , FaArrowRight , FaHeart } from 'react-icons/fa';


const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  } 

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
             <FaHeart size={30}></FaHeart> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
             <FaArrowRight size={30}></FaArrowRight>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
              <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <FaThumbsUp size={30}></FaThumbsUp>
                </button>
                <button className='btn_shadow'>
                  VIEW PROJECT <FaChevronRight size={30}></FaChevronRight>
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <FaTimes styl size={30}></FaTimes>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card ;