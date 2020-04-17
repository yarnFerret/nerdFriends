import React, { Fragment, Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
        cats: [],
        searchfield:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
      return response.json();
    }).then(users =>{
      this.setState({ cats: users })
    })
  }

  onSearchChange = (event) =>{
    this.setState({searchfield: event.target.value})
  }

  render() {
    const {cats, searchfield} = this.state;
    const filterCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    return !cats ?
      <h1>Loading...</h1> :
      (
      <Fragment>
        <h1 className='title'>Nerd friends from school</h1>
        <SearchBox searchChange ={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <Cardlist cats={filterCats} />
          </ErrorBoundry>
        </Scroll>
      </Fragment>
    )
  }
}

export default App;