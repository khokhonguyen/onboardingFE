import React from 'react'
import './CardItemCT.css'
function CardItem(props) {
  return (
    <>
      <li className='cards__item__ct'>
          <figure className='cards__item__pic-wrap__ct' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='name'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info__ct'>
            <p className='cards__item__text__ct'>{props.text}</p>
            <p className='cards__item__p__ct'>{props.p}</p>
          </div>
      </li>
    </>
  )
}

export default CardItem