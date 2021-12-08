import "./Frameexercise.css";
function Frameexercise(exercise)
{
    return(
        <div className="exer-containner">
            <p className="exer-title">{exercise.title}</p>
            <div className="exer-type">{exercise.type}</div>
            <button className="btn-start" type="button">Start</button>
        </div>
    )
}
export default Frameexercise;