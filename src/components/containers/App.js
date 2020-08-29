import React, {Component} from 'react';
import './App.css';
// import Person from '../Persons/Person/Person'
import Persons from '../Persons/Persons'
import Cockpit from '../Cockpit/Cockpit'

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

  changeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex (p => {
      return p.id === id // checking the id in state that matches the id in parameter
    })

    const person = {
      ...this.state.persons[personIndex] //finding the matched id in the copy of the state
    }

    person.name = event.target.value //assigning the entered input value to the name of matched state

    const persons = [...this.state.persons] 
    persons[personIndex] = person //assigning the updated input back the copy of state

    this.setState({
      persons: persons // updating the state with entered value
    })

  }

  deleteHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)

    this.setState({
      persons: persons
    })
  }

  render(){
   let persons = null

   if(this.state.showPersons){
    persons = ( 
      <div>
        <Persons persons={this.state.persons} 
        delete = {this.deleteHandler} 
        changed={this.changeHandler} />
      </div>
        )
   }
  
    return (
      <div className="App">
        <Cockpit showPersons={this.state.showPersons}
                persons={this.state.persons}
                click={this.togglePersonsHandler}/>
        {persons}
      </div>
    )
  }
}

export default App;
