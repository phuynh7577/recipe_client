import React from 'react';
import { Link } from "react-router-dom";


class Index extends React.Component {


    render() {
        // console.log(props)
        return(
            <div className="index">
                {this.props.recipe.map(recipe => (
                    <div className="recipe" key={recipe.id}>
                        
                        <div className="left">
                        <Link to={{pathname: `/recipes/${recipe.id}`, state: {recipe: recipe.id}}}><img className="recipeimage" src={recipe.image} height="225px" width="275px" alt="recipe"/></Link>
                        </div>   

                        <div className="right">
                            <div className="top">
                                <Link to={{pathname: `/recipes/${recipe.id}`, state: {recipe: recipe.id}}}><h3>{recipe.title}</h3></Link> 
                                <div className="likes"> 
                                <img onClick={() => this.props.addSupport(recipe)} src="./heart.png" width="20px" height="20px" alt="Heart"/><span> {recipe.likes === 0 ? "" : recipe.likes}</span>
                        </div>                               
                            </div>
                            {recipe.ingredients.map(ingredients => (
                                    <li key={ingredients}>
                                        {ingredients}
                                    </li>
                            ))}
                        </div>
                        {/* <p className="x" onClick={() =>this.props.handleDelete(recipe)}>X</p> */}
                    </div>
                ))}
            </div>
        )
    }
}

export default Index








