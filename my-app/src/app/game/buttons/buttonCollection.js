import {DontRememberButton, NextButton, RememberButton} from "./buttons";
import React from "react";

function PracticeModeButtons({handleButtonNext}){
  return(
    <div className="practice_mode_buttons">
      <NextButton handleButtonNext={handleButtonNext}/>
    </div>
  )
}

function ExamModeButtons({handleButtonNext, handleButtonRemember, deckLength , rememberedKanji}){
  return(
    <div className="exam_mode_buttons">
      <span>Do you remember this kanji and its meaning?</span>
      <span>Remembered: {rememberedKanji}/{deckLength}</span>
      <RememberButton handleButtonRemember={handleButtonRemember}/>
      <DontRememberButton handleButtonNext={handleButtonNext}/>
    </div>
  )
}

export {PracticeModeButtons, ExamModeButtons};