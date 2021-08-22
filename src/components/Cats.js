import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Cats = ({src, alt}) => {

    function openTab() {
        window.open(src);
      }

    return (
        <Router>
            <Link to="" onClick={openTab}><img src={src} alt={alt} /></Link>
        </Router>
    )
}

export default Cats