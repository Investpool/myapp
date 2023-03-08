import React from 'react'
import {Link} from 'react-router-dom'
function Industries() {
    return (
        <div>
            <h1>INDUSTRIAL STATUS</h1>
            <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Officia inventore 
                 neque quaerat explicabo dolorum animi 
                 nihil nulla, sapiente quidem id iusto 
                 assumenda exercitationem pariatur quas.
                  Minima dolores praesentium aliquam odit.
            </p>

            <div>
                <Link to="/services/7">Catering</Link>
            </div>
            <div>
                <Link to="/services/9">Consulation</Link>
            </div>
            <div>
                <Link to="/services/0">Marketing</Link>
            </div>
        </div>
    )
}

export default Industries;