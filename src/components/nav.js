import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <Link to="/" className="nav-link">Welcome</Link>
            </li>
            <li className="nav-item">
                <Link to="/our-macarons" className="nav-link">Our Macarons</Link>
            </li>
            <li className="nav-item">
                <Link to="/gift-parties" className="nav-link">Gift Parties</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
        </ul>
    )
}