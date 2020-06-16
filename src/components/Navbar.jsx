import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to="/">HOME</Link>
            <br/>
            <Link to="/add">ADD NEW</Link>
        </div>
    )
}

export default Navbar
