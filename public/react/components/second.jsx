import React,{Component} from 'react';
import axios from 'axios';


export default class Second extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }



secondFunction = () => {
   //go to npm axios and it will show you how to write it
   axios.get('https://api.chucknorris.io/jokes/categories')
     .then(response => {
       console.log('im second:', response);
     })
     .catch(function(error){
       console.log('error:', error);
     })
}

  render() {
    console.log('this is the initial state of our randomjoke:', this.state.randomjoke);
    return (
      <div>
        <div>
          <button className="secondB" onClick={this.secondFunction}>YES</button>
          <button className="thirdB" onClick={this.thirdFunction}>NO</button>
        </div>
      </div>
    )
  }
}
