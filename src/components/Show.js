import React from 'react';


class Show extends React.Component {
    state = {
        ActiveRecipe: "",
        isLoading: true,
        error: null
    }

//lifecycle method
    componentDidMount = () => {
        const hash = this.props.location.pathname
        fetch(`http://localhost:3000/${hash}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    activeRecipe: data,
                    isLoading: false
                })
            })
            .catch(error => this.setState({error, isLoading: false}))
            
            // this.getRecipe();
    }

// getRecipe = (recipe) => {
//     this.setState(recipe)
// }




    render() {
        // console.log(this.props.location)
        return(
            <div className="show">
                <img className="bully" src="../paw.gif" height="100%" alt="https://img.clipartlook.com/dog-dry-food-bowl-dog-food-clipart-416_416.jpg"/>
                {!this.state.isLoading ?
                <div className="info">
                    <div className="data">
                        <h3>{this.state.activeRecipe.title} <img src="../heart.png" alt="Heart"/><span>{this.state.activeRecipe.likes === 0 ? "" : this.state.activeRecipe.likes}</span>
</h3>
                        <h4>{this.state.activeRecipe.difficulty}</h4>
                        {this.state.activeRecipe.ingredients.map(ingredients => (
                            <div className="li" key={ingredients}>
                                <ul>
                                    <li>
                                        {ingredients}
                                    </li>
                                </ul>
                            </div>
                        ))}
                        <img className="image" src={this.state.activeRecipe.image} width="500px" height="500px" alt="https://img.clipartlook.com/dog-dry-food-bowl-dog-food-clipart-416_416.jpg"/>
                        <p>{this.state.activeRecipe.instructions}</p>
                        </div>
                </div> : <h2>Loading Recipe...</h2>}
            </div>
        )
    }
}

export default Show

