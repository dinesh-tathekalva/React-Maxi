import React, {Component} from 'react';
import './App.css';
import Person from './components/Person/Person'

class App extends Component {
  state = {
    persons: [{name: 'Christoph', age: 9, id: 1 },
              {name: 'Waltz', age: 6, id: 2},
              {name: 'Anonymous', age: 3, id: 3}
              ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  changeHandler = (e, id) => {
    this.setState({
      persons: [{name: 'Christopher', age: 9 },
              {name: 'Waltz', age: 6},
              {name: e.target.value, age: 3}
              ]
    })
  }

  render(){
   let persons = null

   if(this.state.showPersons){
    persons = ( 
      <div>
        {this.state.persons.map(person => <Person 
                                          name={person.name} 
                                          age={person.age} 
                                          key={person.id}
                                          change={this.changeHandler.bind(this, person.id)}/>)}
      </div>
        )
   }

    return (
      <div className="App">
        <h1>This is a React App</h1> 
        <button onClick={this.togglePersonsHandler}>Click me</button>
        {persons}
        
      </div>
    )
  }
}

export default App;
