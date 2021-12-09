import MainLayout from "../layouts/MainLayout";
import "../assets/styles/Exercises.css";
import Frameexercise from "../components/Exercises/index";
function Exercises()
{
    const exercises =
        [
            {
                id: 0,
                title: 'Bài tập 1',
                type: 'Danh sách liên kết',
                level:"Đơn giản"
            },
            {
                id: 2,
                title: 'Bài tập 2',
                type: 'Thao tác với chuỗi',
                level:"Đơn giản"
            },
            {
                id: 3,
                title: 'Bài tập 3',
                type: 'Ma trận',
                level:"Đơn giản"
            },
            {
                id: 4,
                title: 'Bài tập 4',
                type: 'Danh sách liên kết',
                level:"Đơn giản"
            },
            {
                id: 5,
                title: 'Bài tập 5',
                type: 'Danh sách liên kết',
                level:"Đơn giản"
            },
            {
                id: 6,
                title: 'Bài tập 6',
                type: 'Danh sách liên kết',
                level:"Đơn giản"
            },
            {
                id: 7,
                title: 'Bài tập 7',
                type: 'Danh sách liên kết',
                level:"Đơn giản"
            },
            {
                id: 8,
                title: 'Bài tập 8',
                type: 'Danh sách liên kết',
                level:"Đơn giản"
            },
            {
                id: 9,
                title: 'Bài tập 1',
                type: 'Danh sách liên kết',
                level:"Đơn giản"
            },
            {
                id: 10,
                title: 'Bài tập 1',
                type: 'Danh sách liên kết',
                level:"Đơn giản"
            },
            {
                id: 11,
                title: 'Bài tập 1',
                type: 'Danh sách liên kết',
                level:"Đơn giản"
            },
            {
                id: 12,
                title: 'Bài tập 1',
                type: 'Danh sách liên kết',
                level:"Đơn giản"
            }
        ]
    return(
        <>
        <MainLayout>
        <div className="exercises-container">
            <div className="exercises-path">
                <a href="">Home</a>
                <i class="fas fa-angle-right"></i>
                <a href="">Exercises</a>
            </div>
            <div className="exercises-banner">
                <img src="../assets/images/banner-exercise.jpg"></img>
            </div>
            <div className="exercises-search">
            <form className="form-search-execise" action="/action_page.php">
                <input  className="form-search-exer" type="text" placeholder="Tìm kiếm bài luyện tập.." name="search"/>
                <button className="icon-search-exer" type="submit"><i class="fa fa-search"></i></button>
            </form>
            </div>
            <div className="exercises-main">
               {
                   exercises.map(
                       (exercise => (
                            <Frameexercise
                                key={exercise.id}
                                title={exercise.title}
                                type={exercise.type}
                                level={exercise.level}
                            />
                       )))
               }
            </div>
            <div className="exercises-pagenumber">
                <ul>
                    <li><a href=""><i class="fas fa-angle-double-left"></i></a></li>
                    <li><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                    <li><a href="">...</a></li>
                    <li><a href=""><i class="fas fa-angle-double-right"></i></a></li>
                </ul>
            </div>
        </div>       
        </MainLayout>
        </>
    );
}
export default Exercises;