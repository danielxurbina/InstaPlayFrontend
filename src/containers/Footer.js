import React from 'react'
import './footer.css'

function Footer(){
    return(
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-30">
              <div className="footer-text__title">InstaPlay</div>
              <div className="footer-text__body">
                This application is to showcase your musical talents or discover new artists, whichever the case, Enjoy!
              </div>
            </div>
            <div className="col-30">
              <div className="footer-text__title">Quick links</div>
              <ul className="footer-list">
                <li>
                  <a href="https://github.com/danielxurbina">Github</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/daniel-urbina-261720158">LinkedIn</a>
                </li>
                <li>
                  <a href="https://twitter.com/danielxurbina">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer