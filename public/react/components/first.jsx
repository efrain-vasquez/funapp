import React,{Component} from 'react';
import axios from 'axios';


export default class First extends Component {
  constructor(props){
    super(props);
    this.state = {
      randomjoke : ''
    }

  }

firstFunction = () => {
  //go to npm axios and it will show you how to write it
  axios.get('https://api.chucknorris.io/jokes/random')
    .then(response => {
      console.log('im first:', response.data.value);
      //always do it after your console.log so you know it is working
      this.setState({
        randomjoke : response.data.value
      })
    })
    .catch(function(error){
      console.log('error:', error);
    })
}

  render() {
    console.log('this is the initial state of our randomjoke:', this.state.randomjoke);
    return (
      <div className="parentDiv">
        <div className="buttonContainer">
          <button className="firstB" onClick={this.firstFunction}>RANDOM JOKE</button>
        </div>
        <div className="random">{this.state.randomjoke}</div>
      </div>
    )
  }
}
