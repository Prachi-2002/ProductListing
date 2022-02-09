import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
      robots : [],
      searchField : '',
    }

  }
  

  onInputChange = async(val) => {
      await this.setState({searchField : val})
      console.log(this.state.searchField);
  }

  

  componentDidMount = () => {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          
          this.setState({robots : users})
        })
  }


  render(){
    const {robots, searchField} = this.state;

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if (!robots.length) {    
      return <h1>Loading....</h1>
    }
     
    return (
      <div className="App">
        <SearchBox onInputChange={this.onInputChange}/> 
        
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}


export default App;