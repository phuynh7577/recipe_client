import React from 'react'
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <h1>
                        <Link to="/">
                            RECIPES FOR TOTO 
                        </Link>
                        <span>homemade love for your bestfriend.</span>
                        <img src="./bowl.png" width="35px" alt=""/>
                    </h1>
                    
                    <h3>
                        <Link to="/recipe">
                            <span>Post Your Favorite Recipe</span>
                        </Link>
                    </h3>
                </nav>
            </div>
        )
    }
}


export default NavBar