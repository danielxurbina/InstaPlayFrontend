import React from 'react'

function About(){
    return (
        <section id="features">
        <div className="container">
          <div className="section-image__small">
            <img src="https://ca.slack-edge.com/T02MD9XTF-UTV12LVL6-2d2cd56fdce2-512" alt="features" />
          </div>
          <div className="section-text">
            <div className="section-text__title"> Meet The Creator!</div>
            <div className="row">
              <div className="feature-box col-50">
                <div className="section-text__title-small">Hello!</div>
                <div className="section-about_text_body">
                  My name is Daniel Urbina and i'm the creator of InstaPlay! I built this because i'm very passionate about music and social media. I love to see new talents everyday when I check out new music so I built this for those to showcase their talents and interact with others.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About