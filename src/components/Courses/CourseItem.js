import React from 'react';
import { Link } from 'react-router-dom';

function CourseItem(props) {
  return (
    <>
      <li className='courses__item'>
        <Link className='courses__item__link' to={props.path}>
          <figure className='courses__item__pic-wrap' data-category={props.label}>
            <img
              className='courses__item__img'
              alt={props.text}
              src={props.src}
            />
          </figure>
          <div className='courses__item__info' data-category={props.rating}>
            <h5 className='courses__item__text'>{props.text}</h5>
            <p className='courses__item__description'>{props.description}</p>
          </div>
          <div className='courses__item__footer'>
            <span className='free-text'>Miễn phí</span>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CourseItem;
