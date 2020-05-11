import React from "react";

class Form extends React.Component {
    state = {
        title: "",
        difficulty: "",
        image: "",
        ingredients: "",
        instructions: ""
    }


    handleSubmit = (event) => {
        event.preventDefault()
        //send data to server
        fetch('http://localhost:3000/recipes', {
          method: 'POST',
          body: JSON.stringify({
              title: this.state.title,
              difficulty: this.state.difficulty,
              image: this.state.image,
              instructions: this.state.instructions,
              ingredients: this.state.ingredients
          }),
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
          //server responses with json
        }).then (res => res.json())
          .then (resJson => {
            this.props.handleAddRequest(resJson)
            this.setState({
              title: "",
              difficulty: "",
              image: "",
              ingredients: "",
              instructions: ""
            })
            // redirecting to home page
            this.props.history.push('/')
        }).catch (error => console.error({'Error': error}))
      }

      handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value})
    }

    render(){
        return(
            <div className="form">
                <img src="../dog3.png" height="300px" alt="https://img.clipartlook.com/dog-dry-food-bowl-dog-food-clipart-416_416.jpg"/>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="difficulty">Difficulty Level:</label>
                    <select onChange={this.handleChange} name="difficulty" value={this.state.difficulty} id="difficulty">
                        <option value="">Difficulty Level</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <br/>
                    
                    <label htmlFor="title">Title:</label>
                    <input
                        onChange={this.handleChange}
                        name="title"
                        placeholder="Recipe Title"
                        type="text"
                        value={this.state.title}
                        id="title"
                    />
                    <br/>
                    <label htmlFor="image">Image URL:</label>
                    <input
                        onChange={this.handleChange}
                        name="image"
                        placeholder="Enter URL"
                        type="text"
                        value={this.state.image}
                        id="image"
                        />
                        <br/>
                    <label htmlFor="ingredients">Enter Ingredients:</label>
                    <input
                        onChange={this.handleChange}
                        name="ingredients"
                        placeholder="Enter Ingredients Seperated by a Comma"
                        type="text"
                        value={this.state.ingredients}
                        id="ingredients"
                        />
                        <br/>
                    <textarea 
                        rows="3"
                        column="15"
                        type="text"
                        onChange={this.handleChange}
                        name="instructions"
                        id="instructions"
                        placeholder="Enter Instructions"
                        value={this.state.instructions}>
                    </textarea>
                    <br/>
                    <input id="button" type="submit" value="Submit Request"/>
                </form>
            </div>
        )
    }
}

export default Form