import './AddExercise.css';
import './TestCase.css';
function TestCase(Testcase)
{
    return(
        <>
            <div className="testcase-option">
                <label className="addExercise-label" for="testExercise">Testcase {Testcase.id}</label>              
                <div className="delete-icon">
                    <p><i class="fas fa-trash-alt"></i>Xóa TestCase</p>
                </div>
            </div>
            <div className="in-out-Exercise">
            <textarea type="text" name="input" id="testExercise" placeholder="input bài học hiện tại"/>
            <textarea type="text" name="output" id="testExercise" placeholder="input bài học hiện tại"/>
           </div>
        </>                        
    )
}

export default TestCase;