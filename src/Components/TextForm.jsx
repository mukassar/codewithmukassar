import React from 'react'

export default function TextForm(props) {
  return (
    <div>
    

<div className="mb-3">
  <h4>{props.heading}</h4>
  
  <textarea className="form-control" id="myBox" rows="9"></textarea>
</div>
<button className="btn btn-primary">Convert To Uppercase</button>
<br/>
<br/>
<br/>

    </div>
    
  )
}
