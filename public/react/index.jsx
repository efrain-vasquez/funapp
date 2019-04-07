//this will be my root folder for react where i wil connect server to front end


import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import First from "./components/first.jsx";

// extends React.component creates connection
class App extends React.Component{

//anything before the render has to do with jS functionality. all syntax of html must be inside return
  render() {
    return(
      <div>
        <h1> Thanks Holacode! </h1>
        <First/>
      </div>
    )
  }
}

//ReactDom is my object this object take in a render method which take in two arguments
ReactDom.render(<App />,document.getElementById('app'));
//webpack compiles your project
//if you dont know if problem is in
//run live server to isolate if you have a front end problem or back end problem

//this is for styles.css file
//this is an outside stylesheet so you can style all your app and not have to do it in react
//so dont have all that css in that same file

//this is for index.html file
//index.html is what calls the stylesheet so should put css file in this folder
