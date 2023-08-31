import React from 'react'
import img2 from './images/games.png'

function Game() {
  return (
    <div>
        <div class="container">
        <img src={img2} class="img-fluid" alt="Imgae Not Loaded"></img>
       <br />
       <br/>
       <br />
       <br/>
       <div class="list-group">
  <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
  Alphabet Puzzle Games
  </button>
  <button type="button" class="list-group-item list-group-item-action">Memory Puzzle Card Games</button>
  <button type="button" class="list-group-item list-group-item-action">Number Puzzle Games</button>
  <button type="button" class="list-group-item list-group-item-action">Word Search Puzzle Games</button>
  <button type="button" class="list-group-item list-group-item-action">Missing Pieces Puzzle Games</button>
</div>

       </div>
    </div>
  )
}

export default Game