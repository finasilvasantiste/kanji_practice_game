import {NextButton} from "./buttons";
import React from "react";

function PracticeModeButtons({handleButtonNext}){
  return(
    <div className="practice_mode_buttons">
      <NextButton handleButtonNext={handleButtonNext}/>
    </div>
  )
}

function ExamModeButtons({handleButtonNext}){
  return(
    <div className="exam_mode_buttons">
      <NextButton handleButtonNext={handleButtonNext}/>
      <NextButton handleButtonNext={handleButtonNext}/>
    </div>
  )
}


export {PracticeModeButtons, ExamModeButtons};