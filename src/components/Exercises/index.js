import "./Frameexercise.css";

function Frameexercise(exercise)
{
    function handleClick(id) 
    {
        console.log(id);
    }
    return(
        <div className="exer-containner">
            <p className="exer-title">{exercise.title}</p>
            <div className="exer-type">{exercise.type}</div>
            <div className="exer-level"><p>{(exercise.level === 1 ? "Đơn giản" : "Trung bình")}</p></div>
            <div className="container-btn-start">
                <a href={`/exercise/${exercise.id}`} className="btn-start">Start</a>
            </div>
        </div>
    )
}
export default Frameexercise;