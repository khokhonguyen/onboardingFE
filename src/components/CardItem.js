import React from 'react'
import './CardItem.css'
function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='name'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h2 className='cards__item__text'>{props.text}</h2>
            <p className='cards__item__p'>{props.p}</p>
          </div>
      </li>
    </>
  )
}

export default CardItem