import "./Frameexercise.css";
import { Link } from 'react-router-dom';
function Frameexercise(exercise)
{
    return(
        
        <div className="exer-containner">
            <p className="exer-title">{exercise.title}</p>
            <div className="exer-type">{exercise.type}</div>
            <div className={(exercise.level === 1 ? "exer-level-simple" : (exercise.level === 2 ? "exer-level-normal" : "exer-level-hard"))} >
                <p>{(exercise.level === 1 ? "Đơn giản" : (exercise.level === 2 ? "Trung bình" : "Khó"))}</p>
            </div>
            <Link class="frameExer_link" to={exercise.path}>
                <div className="container-btn-start">
                    <a className="btn-start">Start</a>
                </div>
            </Link>            
        </div>
    )
}
export default Frameexercise;
/*"exer-level"*/