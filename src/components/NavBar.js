import React from 'react'
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="NavBar">
                    <img src="../bowl.png" height="70px" alt="Picture of a bowl"/>
                    <h1>
                        <Link to="/">
                            RECIPES FOR TOTO - <span>homemade recipes for your bestfriend.</span>
                        </Link>
                    </h1>
                    <h3>
                        <Link to="/recipe">
                            Submit Your Favorite Recipe
                        </Link>
                    </h3>
                </nav>
            </div>
        )
    }
}


export default NavBar