import React from 'react'
import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Story from './Story'
import Activity from './Activity'
import Game from './Game'

function App() {

  return (
    <>
   <Router>
    <div>
<nav class="nav nav-pills nav-fill">
  <a class="nav-link"><Link to="/">Home</Link></a>
  <a class="nav-link"><Link to="/story">Story</Link></a>
  <a class="nav-link"><Link to="/activity">Activity</Link></a>
  <a class="nav-link"><Link to="/game">Game</Link></a>
</nav>
<Routes>
  <Route path="/" exact Component={Home}></Route>
  <Route path="/story" Component={Story}></Route>
  <Route path="/activity" Component={Activity}></Route>
  <Route path="/game" Component={Game}></Route>
</Routes>
    </div>
    </Router> 
    </>
  )
}

export default App
