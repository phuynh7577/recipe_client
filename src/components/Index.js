import React from 'react';
import { Link } from "react-router-dom";


class Index extends React.Component {


    render() {
        // console.log(props)
        return(
            <div className="index">
                <img src="../dog4.png" height="300px" alt="https://img.clipartlook.com/dog-dry-food-bowl-dog-food-clipart-416_416.jpg"/>
                {this.props.recipe.map(recipe => (
                    <div className="recipe" key={recipe.id}>
                        <Link to={{pathname: `/recipes/${recipe.id}`, state: {recipe: recipe.id}}}><h3>{recipe.title}</h3></Link>
                        <h4>{recipe.difficulty}</h4>
                        <div className="likes">
                            <img onClick={() => this.props.addSupport(recipe)} src="./heart.png" alt="Heart"/><span>{recipe.likes === 0 ? "" : recipe.likes}</span>
                        </div>
                        {/* <img src={recipe.image} width="400px" height="400"  alt="https://img.clipartlook.com/dog-dry-food-bowl-dog-food-clipart-416_416.jpg"></img> */}
                        <p className="x" onClick={() =>this.props.handleDelete(recipe)}>X</p>
                    </div>
                ))}
                <img src="../looking.png" alt="https://img.clipartlook.com/dog-dry-food-bowl-dog-food-clipart-416_416.jpg"/>
            </div>
        )
    }
}

export default Index








