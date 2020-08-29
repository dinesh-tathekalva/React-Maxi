import React, {Component} from 'react';
import './App.css';
import Person from './components/Persons.js/Person/Person'

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
    const style = {
      backgroundColor : 'white',
      border: '1px solid green',
      padding: '0.8em',
      borderRadius: '0.3em',
      outline:'none'
    }

   let persons = null

   if(this.state.showPersons){
    persons = ( 
      <div>
        {this.state.persons.map((person, index) => <Person 
                                          click= {this.deleteHandler.bind(this, index)}
                                          name={person.name} 
                                          age={person.age} 
                                          key={person.id}
                                          change={(event) => this.changeHandler(event, person.id)}/>)}
      </div>
        )
        style.border = '1px solid red' //changing the style conditionally
   }

   const classes = []
   if(this.state.persons.length <= 2){
    classes.push('colorClass')
   }
   if(this.state.persons.length <=1){
     classes.push('boldClass')
   }

    return (
      <div className="App">
        <h1>This is a React App</h1> 
        <p className={classes.join(' ')}>This font is to test the conditional styling</p>
        <button style={style} onClick={this.togglePersonsHandler}>Click me</button>
        {persons}
        
      </div>
    )
  }
}

export default App;
