import React from 'react';
import {Link} from "react-router-dom"
import "../components/Header.css"


export default function Header() {

    return (
        <div>
            <Link to="/" style={{textDecoration: 'none'}}>
            <div>Basic</div>
            </Link>
            <Link to="/randomquote" style={{textDecoration: 'none'}}>
                <div>
                    Random Quote
                </div>
            </Link>
            <Link to="/robos" style={{textDecoration: 'none'}}>
                <div>
                    Robos
                </div>
            </Link>


        </div>
    )
}