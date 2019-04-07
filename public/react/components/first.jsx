import React,{Component} from 'react';
import axios from 'axios';










export default class First extends React.Component {

firstFunction(){
  //go to npm axios and it will show you how to write it
  axios.get('https://api.chucknorris.io/jokes/random')
    .then(function(response){
      console.log('im first:',response);
    })
  .catch(function(error){
    console.log('error:', error);
  })
}

secondFunction(){
  console.log('im second');
}

thirdFunction(){
  console.log('im third');
}

  render() {
    return (
      <div> hola mundo
        <div className="buttonContainer">
          <button className="firstB" onClick={this.firstFunction}>CLICK ME</button>
            <br/>
            <br/>
          <button className="secondB" onClick={this.secondFunction}>YES</button>
            <br/>
            <br/>
          <button className="thirdB" onClick={this.thirdFunction}>NO</button>
        </div>
      </div>
    )
  }
}
