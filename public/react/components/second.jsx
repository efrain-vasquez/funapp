import React,{Component} from 'react';
import axios from 'axios';
import {Dropdown} from 'react-bootstrap';

export default class Second extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories : []
    }
  }

componentDidMount(){
  this.secondFunction();
}

secondFunction = () => {
   //go to npm axios and it will show you how to write it
   axios.get('https://api.chucknorris.io/jokes/categories')
     .then(response => {
       console.log('im second:', response.data);
       this.setState({categories : response.data })
     })
     .catch(error => {
       console.log('error:', error);
     })
}


retrieveCategory = (item) => {
  console.log('category clicked:', item);
  axios.get(`https://api.chucknorris.io/jokes/random?category=${item}`)
  .then(res =>(
    console.log('response by category', res)
  ))
  .catch(err => {
    console.log('err in category', err);
  })
}

  render() {
    console.log('categories:', this.state.categories);
    let categories = this.state.categories;
    return (
      <div>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
        </Dropdown.Toggle>

          <Dropdown.Menu>
          {categories.map(item => {
            return <span><Dropdown.Item onClick={this.retrieveCategory.bind(this, item)}>{item}</Dropdown.Item> <br/></span>
          })
        }
        </Dropdown.Menu>
     </Dropdown>
     </div>
    )
  }
}
