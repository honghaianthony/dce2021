import './AddExercise.css';
import './TestCase.css';
import { useState,useEffect} from 'react';

function TestCase({id,handleChangeInput,handleChangeOutput,input,output})
{
    /*const[input,setInput]=useState("");
    const[output,setOutput]=useState("");
    Testcaseitem.input=input;
    Testcaseitem.output=output;
    */
    return(
        <>
            <div className="testcase-option">
                <label className="addExercise-label" for="testExercise">Testcase</label>              
            </div>
            <div className="in-out-Exercise">
            <textarea type="text" 
                      name="input" 
                      id="in-testExercise" 
                      placeholder="Input"
                      value={input}
                      onChange={(e)=>handleChangeInput(e.target.value)}/>
            <textarea type="text" 
                      name="output"
                      id="out-testExercise" 
                      placeholder="Output"
                      value={output}
                      onChange={(e)=>handleChangeOutput(e.target.value)}/>
           </div>
        </>                        
    )
}

export default TestCase;