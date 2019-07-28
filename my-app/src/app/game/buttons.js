import Button from "react-bootstrap/Button";
import React from "react";

function NextButton({handleButtonNext}) {
  return (
    <div>
      <Button variant="light" onClick={handleButtonNext}>Next</Button>
    </div>
  )
}

export {NextButton};