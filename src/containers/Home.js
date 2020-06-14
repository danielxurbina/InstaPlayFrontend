import React from 'react';

function Home(){
    return(
        <section id="home">
        <div className="container">
          <div className="home-text">
            <div className="section-text__subtitle" />
            <div className="section-text__title-big">InstaPlay</div>
            <div className="section-text__body" style={{ marginBottom: "30px" }}>
              Discover new music today!
            </div>
            <a href="http://localhost:3001/login" style={{ marginRight: "10px", width: "80px", textAlign: "center" }} className="download-btn">
              Sign In
            </a>
            <a href="http://localhost:3001/signup" className="download-btn" style={{marginLeft: "10px", width: "80px", textAlign: "center"}}>
              Sign Up
            </a>
          </div>
          <div className="section-image">
            <img src="https://www.tickpick.com/blog/wp-content/uploads/2019/01/people-2600872_1280.jpg" alt="app preview" />
          </div>
        </div>
      </section>

    )
}

export default Home