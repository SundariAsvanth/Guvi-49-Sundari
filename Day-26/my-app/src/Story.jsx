import React from 'react'
import img3 from './images/stories.jpg'
function Story() {
  return (
    <div>
        <div class="container">
        <img src={img3} class="img-fluid" alt="Imgae Not Loaded"></img>
       <br />
       <br/>
       <div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
  Classic children's literature
  </button>
  <button type="button" class="list-group-item list-group-item-action">Picture books</button>
  <button type="button" class="list-group-item list-group-item-action">Fairytales & folklore</button>
  <button type="button" class="list-group-item list-group-item-action">Fantasy fiction</button>
  <button type="button" class="list-group-item list-group-item-action">Realistic fiction</button>
</div>

       </div>
    </div>
  )
}

export default Story