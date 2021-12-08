import React from 'react';
import { Link } from 'react-router-dom';
import { GrView } from 'react-icons/gr';
import { BsShare, BsFillStarFill, BsCircle } from 'react-icons/bs';

function BlogItem(props) {
  return (
    <>
      <div className='blog-item'>
        <Link className='blog-item-link' to={props.path}>
            <figure className='blog-item-wrap' data-category={props.label}>
              <img
              className='blog-item-img'
              alt={props.title}
              src={props.src}
              />
            </figure>
            <div className='blog-item-content'>
              <div className='blog-item-info' data-category={props.info}>
                <h5 className='blog-item-title'>{props.title}</h5>
                <i className='blog-item-rating'><BsFillStarFill/></i>
                <i className='blog-item-rating'><BsFillStarFill/></i>
                <i className='blog-item-rating'><BsFillStarFill/></i>
                <i className='blog-item-rating'><BsFillStarFill/></i>
                <i className='blog-item-rating'><BsFillStarFill/></i>
                <p className='blog-item-description'>{props.description}</p>
             </div>
              <div className='blog-item-author'>
                <div className='blog-text-left'>
                    <span>Tác giả:</span>
                    <span className='blog-author-name'>{props.author}</span>
                    <i className='blog-time-icon'><BsCircle/></i>
                    <span className='blog-time'>{props.time}</span>
                </div>
                {/* <div className='blog-text-right'>
                    <i className='blog-icon-view'><GrView/></i>
                    <span className='blog-view'>{props.view}</span>
                    <i className='blog-icon-share'><BsShare/></i>
                    <span className='blog-share'>0</span>
                </div> */}
              </div>
            </div>
        </Link>
      </div>
    </>
  );
}

export default BlogItem;
