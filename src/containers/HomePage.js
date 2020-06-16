import React from 'react'
import Home from './Home'
import About from './About'
import Footer from './Footer'
import '../styles/home.css'

export default function HomePage() {
        return(
            <>
                <main>
                    <Home />
                    <About />
                </main>
                <Footer />
            </>
        )
}

