import Button from "react-bootstrap/Button";
import React from "react";

function NextButton({handleButtonNext}) {
  return (
    <div>
      <Button variant="light" onClick={handleButtonNext}>Next</Button>
    </div>
  )
}

function RememberButton({handleButtonRemember}){
  return (
    <div>
      <Button variant="light" onClick={handleButtonRemember}>Yes</Button>
    </div>
  )
}

function DontRememberButton({handleButtonNext}){
  return (
    <div>
      <Button variant="light" onClick={handleButtonNext}>No</Button>
    </div>
  )
}

export {NextButton, RememberButton, DontRememberButton};