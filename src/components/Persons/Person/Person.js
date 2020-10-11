import React from 'react'
import './Person.css'

const person = props => {
    const style = {
        backgroundColor : 'white',
        border: '1px solid #909090',
        padding: '0.8em',
        borderRadius: '0.3em'
  
      }
    const { age, name, click, change } = props
    return(
    <div className='Person'>
     <p onClick={click}>I'm {name} and I'm a person. I'm {age} years old.</p>
     <h5>{props.children}</h5>
     <input style={style} type='text' onChange={change} value={name}></input>
    </div>
    )
}

export default person