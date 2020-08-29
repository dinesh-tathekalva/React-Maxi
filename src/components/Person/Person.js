import React from 'react'
import './Person.css'

const person = props => {
    const { age, name, click, change } = props
    return(
    <div className='Person'>
     <p onClick={click}>I'm {name} and I'm a person. I'm {age} old.</p>
     <h5>{props.children}</h5>
     <input type='text' onChange={change} value={name}></input>
    </div>
    )
}

export default person