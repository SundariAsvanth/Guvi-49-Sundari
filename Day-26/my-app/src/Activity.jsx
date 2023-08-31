import React from 'react'
import img4 from './images/activity.jpg'

function Activity() {
  return (
    <div>
        <div class="container">
        <img src={img4} class="img-fluid" alt="Imgae Not Loaded"></img>
       <br />
       <br/>
       <br />
       <br/>
       <div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
  Paper Craft Activities
  </button>
  <button type="button" class="list-group-item list-group-item-action">Colouring Activities</button>
  <button type="button" class="list-group-item list-group-item-action">Fingerprint activities</button>
  <button type="button" class="list-group-item list-group-item-action">Art From Waste Activities</button>
  <button type="button" class="list-group-item list-group-item-action">Oil Painting Activities</button>
</div>

       </div>
    </div>
  )
}

export default Activity