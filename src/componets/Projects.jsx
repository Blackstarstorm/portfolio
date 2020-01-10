import React from 'react'

export default function Projects() {
  return (
    <div id="projects">
      <h2 className="title">Projects</h2>
      <div className="container">

        <div className="card">
          <div className="face face1">
            <div className="content">
        <h2>Who's That Pokémon</h2>
              <p>Get pokemon with the push of a button. A project made with an API, HTML, CSS, and JavaScript.
              I used an API to call data a pokemon's name and image JavaCScript to play some music and rendering it on the page, with some CSS to style the web application.</p>
                <a href="http://whos-that-pokemon-win.surge.sh/" target="_blank" rel="noopener noreferrer">Go to Site</a>
                </div>
          </div>
          <div className="face face2" id="bg_1">
            <h2>P1</h2>
          </div>
        </div>

        <div className="card">
        <div className="face face1">
        <div className="content">
        <h2>News Game Plus</h2>
              <p>Look at your most recent gamer/geeky news. 
                A video game news web application made with React, have some sound with JavaScript using the News API to call and rendered the page and  CSS to style the web application.</p>
              <a href="http://news-game-plus.surge.sh/" target="_blank" rel="noopener noreferrer">Go to Site</a>
            </div>
        </div>
        <div className="face face2" id="bg_2">
          <h2>P2</h2>
        </div>
      </div>  
        
        <div className="card">
        <div className="face face1">
        <div className="content">
        <h2>Scared Souls Yoga"Not the real site"</h2>
              <p>A project made with other software engineer fellows and UXI students.
                Having a site made with React front-end and  CSS styling.</p>
              <a href="http://sacredsoulsyoga.surge.sh/" target="_blank" rel="noopener noreferrer">Go to Site</a>
            </div>
          </div>
          <div className="face face2" id="bg_3">
            <h2>P3</h2>
          </div>
        </div>

        <div className="card">
        <div className="face face1">
        <div className="content">
        <h2>What Player Are You</h2>
              <p>Learn more about popular game genres and see what you would enjoy best.

              Front-end React, Ruby on Rails back-end routes, seed data, models, CSS styling and JavaScript too. Users will need to register and login to view project.</p>
              <a href="http://player-are-you.surge.sh/" target="_blank" rel="noopener noreferrer">Go to Site</a>
            </div>
          </div>
          <div className="face face2" id="bg_4">
            <h2>P4</h2>
          </div>
        </div> 
        
      </div>
      

    </div>
  )
}
