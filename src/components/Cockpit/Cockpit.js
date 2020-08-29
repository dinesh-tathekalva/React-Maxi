import React from 'react'
import './Cockpit.css'
const cockpit = props => {
    const assignedClasses = []
    if(props.persons.length <= 2){
        assignedClasses.push('colorClass')
    }
    if(props.persons.length <=1){
        assignedClasses.push('boldClass')
    }
    const style = {
        backgroundColor : 'white',
        border: '1px solid green',
        padding: '0.8em',
        borderRadius: '0.3em',
        outline:'none'
      }
      if(props.showPersons){
        style.border = '1px solid red'
      }
    return (
        <React.Fragment>
            <h1>This is a React App</h1> 
            <p className={assignedClasses.join(' ')}>This font is to test the conditional styling</p>
            <button style={style} onClick={props.click}>Click me</button>
        </React.Fragment>
    )
}

export default cockpit