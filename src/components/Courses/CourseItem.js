import React from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import usersApi from "../../apis/usersApi";

function CourseItem(props) {
  const [done, setDone] = React.useState(false);
  React.useEffect(async () => {
    const doneRes = await usersApi.checkDoneCourse(props.id);
    let done = true;
    doneRes.data.forEach((i) => {
      if (!i.isCompleted) {
        done = false;
      }
    });
    if (done && doneRes.length > 0) {
      setDone(true);
    }
  }, [props.id]);
  const ratingStars = () => {
    if (props.rating === 3) {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStar className="star-unfilled" />
          <BsIcons.BsStar className="star-unfilled" />
        </div>
      );
    } else if (props.rating === 3.5) {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarHalf className="star-halffilled" />
          <BsIcons.BsStar className="star-unfilled" />
        </div>
      );
    } else if (props.rating === 4) {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStar className="star-unfilled" />
        </div>
      );
    } else if (props.rating === 4.5) {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarHalf className="star-halffilled" />
        </div>
      );
    } else {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
        </div>
      );
    }
  };
  return (
    <>
      <li className="courses__item">
        <Link className="courses__item__link" to={props.path}>
          <figure
            className="courses__item__pic-wrap"
            data-category={props.label}
          >
            <img
              className="courses__item__img"
              alt={props.text}
              src={props.src}
            />
          </figure>
          <div className="courses__item__info" data-category={props.rating}>
            {ratingStars()}
            <h5 className="courses__item__text">{props.text}</h5>
            <p className="courses__item__description">{props.description}</p>
          </div>
          <div className="courses__item__footer">
            <span className="free-text">Miễn phí</span>
            {done && <span>Đã xong</span>}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CourseItem;
