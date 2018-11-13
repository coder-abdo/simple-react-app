import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className = "Person" >
            <p onClick = {props.tick}> I am a {props.name} and I am {props.age} years old say Hi from Function Component!!</p>
            <p>{props.children}</p>
            <input onChange = {props.changed} value = {props.name} />
        </div>
    );
};

export default person;