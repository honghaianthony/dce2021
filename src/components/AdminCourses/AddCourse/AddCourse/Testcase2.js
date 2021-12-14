import React from "react";
import { useState, useEffect } from "react";
function Testcase2() {
  return (
    <div>
      <div className="testcase-option">
        <label className="addExercise-label" for="testExercise">
          Testcase {id}{" "}
        </label>
        <div className="delete-icon">
          <p>
            <i class="fas fa-trash-alt"></i>Xóa TestCase
          </p>
        </div>
      </div>
      <div className="in-out-Exercise">
        <textarea
          type="text"
          name="input"
          id="in-testExercise"
          placeholder="input bài học hiện tại"
          value={input}
          onChange={(e) => handleChangeInput(e.target.value)}
        />
        <textarea
          type="text"
          name="output"
          id="out-testExercise"
          placeholder="output bài học hiện tại"
          value={output}
          onChange={(e) => handleChangeOutput(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Testcase2;
