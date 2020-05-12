import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Index from "./components/Index"
import Show from './components/Show'
import Form from "./components/Form"

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === "development") {
    baseURL = "http://localhost:3000"
} else {
    baseURL = "https://recipesfortotoapi.herokuapp.com"
}

class App extends React.Component {
  state = {
    recipe: []
}

//clearing state after POST
handleAddRequest = (recipe) => {
  const copyRecipe = [...this.state.recipe]
  copyRecipe.unshift(recipe)
  this.setState({
    recipe: copyRecipe,
    title: '',
    difficulty: '',
    image: '',
    ingredients: '',
    instructions: '',
  })
}


componentDidMount() {
    this.getRecipe()
}

getRecipe = () => {
    fetch(`${baseURL}/recipes`)
        .then(res => res.json())
        .then(data => {
          this.setState({
              recipe: data
              // .filter(recipe => !!recipe.death)
              .map(recipe => ({
                  title: recipe.title,
                  difficulty: recipe.difficulty,
                  likes: recipe.likes,
                  image: recipe.image,
                  ingredients: recipe.ingredients,
                  instructions: recipe.instructions,
                  id: recipe.id
              }))
          })
      })
        .catch(err => console.log(err))
}

//DELETE
handleDelete = (Recipe) => {
  fetch(`${baseURL}/recipes/${Recipe.id}`, {
     method: 'DELETE',
     headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     }
   })
 .then(json => {
   const recipe = this.state.recipe.filter(recipes => recipes.id !== Recipe.id)
   this.setState({recipe})
 })
 .catch(error => console.log(error))
}

//UPDATE likes
addSupport = (recipe) => {
  fetch(`${baseURL}/recipes/${recipe.id}`, {
    method: 'PUT',
    body: JSON.stringify({likes: recipe.likes + 1}),
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type' : 'application/json'
    }
  }).then(res => res.json())
  .then(resJson => {
        const copyRecipes = [...this.state.recipe]
        const findIndex = this.state.recipe.findIndex(recipe => recipe.id === resJson.id)
        copyRecipes[findIndex].likes = resJson.likes;
        this.setState({recipe: copyRecipes})
  })
}


  render(){
    return (
      <BrowserRouter>
      <div className="App">
          <NavBar/>
          <Route path="/recipe" exact render={props => <Form {...props} recipe={this.state.recipe} handleAddRequest={this.handleAddRequest}/>}/>
          <Route path="/" exact render={(props) => <Index {...props} recipe={this.state.recipe} handleDelete={this.handleDelete} addSupport={this.addSupport}/>}/>
          <Route path="/recipes/:id" exact render={(props) => <Show {...props} recipe={this.state.recipe} addSupport={this.addSupport}/>}/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
