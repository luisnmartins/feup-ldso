import React, {Component} from "react";

class Editor extends Component{

  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    
    const route = process.env.REACT_APP_ENDPOINT + "faculties/en/" + this.props.match.params.faculty.toLowerCase() + "/social-projects?where[id]=" + this.props.match.params.project; 
    console.log( route);
    fetch(route, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => console.log(response))
  }

  render(){
    return(
      <button onClick={this.handleSubmit}>Delete</button>
    );
  }
}

export default Editor;