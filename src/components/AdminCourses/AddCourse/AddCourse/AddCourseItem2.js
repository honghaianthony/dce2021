import React from 'react'
import {Link } from "react-router-dom";
import './AddCourseItem2.css'
function AddCourseItem2(data) {
    // return (
    //     <div className="AddCourseItem2_container">
    //         <div className="AddCourseItem2_left">
    //             <div className="btn_edit_AddCourseItem">
    //                 <button  type="button">
    //                    <i class="fas fa-pencil-alt "></i>
    //                 </button>
    //             </div>
    //             <div className="Name_course_AddCourseItem2">
    //                 <span>Bài {item.id}: {item.name}</span>
    //             </div>
    //         </div>
    //         <div className="AddCourseItem2_right">
    //             <div className="btn_delete_AddCourseItem2">
    //                 <button type="button">
    //                     <i class="far fa-trash-alt"></i>
    //                 </button>
    //             </div>  
    //         </div>
            
    //     </div>
    // )
    // const {item,handleDeleteClick} = props
    // const handleDelete=(id) => {
    //     if(handleDeleteClick) {
    //         handleDeleteClick(id);
    //     }
    // };
    
    return (
        <div className="AddCourseItem2_container">
            
            <div className="Item2_container">
                    <div className="AddCourseItem2_left">
                        <div className="btn_edit_AddCourseItem">
                            <Link to="/adminUpdateLesson">
                                <button  type="button">
                                    <i class="fas fa-pencil-alt "></i>
                                </button>
                            </Link>
                        </div>
                        <div className="Name_course_AddCourseItem2">
                            <span>Bài {data.id}: {data.name}</span>
                        </div>
                    </div>
                    <div className="AddCourseItem2_right">
                        <div className="btn_delete_AddCourseItem2">
                            <button type="button" >
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </div>  
                    </div>
            </div>
        </div>
    )
}

export default AddCourseItem2
