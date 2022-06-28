import React from 'react'

export default function TextForm(props) {
  return (
    <div>
    

<div className="mb-3">
  <h4>{props.heading}</h4>
  
  <textarea className="form-control" id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary">Conver To Uppercase</button>
    </div>
    
  )
}
