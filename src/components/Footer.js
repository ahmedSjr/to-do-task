import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright &copy; 2021</p>
            <Link to="/about" className="about">About</Link>
        </footer>
    )
}

export default Footer
