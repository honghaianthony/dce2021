import MainLayout from "../layouts/MainLayout";
import "../assets/styles/Exercises.css";
import Frameexercise from "../components/Exercises/index";
import ExerciseApi from "../apis/ExerciseApi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Exercises() {
  const [listExercise, setListExercise] = useState([]);
  const [filterExercise, setFilterExercis] = useState(listExercise);
  const [search, setSearch] = useState("");
  useEffect(async () => {
    const res = await ExerciseApi.getAllExercise();
    setListExercise(res);
    setFilterExercis(res);
  }, []);

  useEffect(async () => {
    const res = await ExerciseApi.getAllExercise();
    if (search == "") {
      setListExercise(res);
      setFilterExercis(res);
    } else {
      const newListExercise = await listExercise.filter((item) => {
        return (
          item.exerciseName.toLowerCase().search(search.toLowerCase()) !== -1
        );
      });
      setListExercise(newListExercise);
      setFilterExercis(newListExercise);
    }
  }, [search]);

  const listExercises = () => {
    if (filterExercise.length > 0) {
      return filterExercise.map((item, index) => {
        let pathExer = "/exercises/" + item._id;
        return (
          <Frameexercise
            key={index}
            id={item.id}
            title={item.exerciseName}
            level={item.level}
            path={pathExer}
          />
        );
      });
    } else {
      return <div className="loader"></div>;
    }
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lập trình hàng ngày với vô vàng bài luyện tập</title>
        <meta
          name="description"
          content="Kho bài tập với nội dung đa dạng để nâng cao kỹ năng lập trình, tư duy về thuật toán và cấu trúc dữ liệu."
        />
      </Helmet>
      <MainLayout>
        <div className="exercises-container">
          <div className="exercises-path">
            <Link to="/">Home</Link>
            <i className="fas fa-angle-right"></i>
            <Link to="/exercises">Exercises</Link>
          </div>
          <div className="exercises-banner">
            <h3>TIME FOR TRAINING</h3>
            <img className="decor__img" src="/images/courses/decor.png" />
          </div>
          <div className="exercises-search">
            <form className="form-search-execise" action="/action_page.php">
              <input
                className="form-search-exer"
                type="text"
                placeholder="Tìm kiếm bài luyện tập.."
                name="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button className="icon-search-exer" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <div className="exercises-main">{listExercises()}</div>
          <div className="exercises-pagenumber">
            <ul>
              <li>
                <a href="">
                  <i className="fas fa-angle-double-left"></i>
                </a>
              </li>
              <li>
                <a href="">1</a>
              </li>
              <li>
                <a href="">2</a>
              </li>
              <li>
                <a href="">3</a>
              </li>
              <li>
                <a href="">4</a>
              </li>
              <li>
                <a href="">5</a>
              </li>
              <li>
                <a href="">...</a>
              </li>
              <li>
                <a href="">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
export default Exercises;
