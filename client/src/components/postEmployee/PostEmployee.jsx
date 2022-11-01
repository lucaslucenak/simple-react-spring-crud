import React from 'react'
import './postEmployee.css'
import {useState} from 'react'
import axios from 'axios'

const PostEmployee = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [position, setPosition] = useState('');
    const [wage, setWage] = useState(0);
  
    const addEmployee = () => {
      axios.post('http://localhost:8080/employee/', {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    }

  return (
    <section id='postEmployee'>
        <div className='information'>
            <label>Name: </label>
            <input
            type="text"
            onChange= {(event) => {
                setName(event.target.value);
            }} 
            />

            <label>Age: </label>
            <input 
            type="number"
            onChange= {(event) => {
            setAge(event.target.value);
            }}
            />

            <label>Country: </label>
            <input 
            type="text"
            onChange= {(event) => {
            setCountry(event.target.value);
            }}
            />

            <label>Position: </label>
            <input
            type="text"
            onChange= {(event) => {
            setPosition(event.target.value);
            }}
            />

            <label>Wage (year): </label>
            <input
            type="number"
            onChange= {(event) => {
            setWage(event.target.value);
            }}
            />

            <button onClick={addEmployee}>Add Employee</button>
        </div>
    </section>
  )
}

export default PostEmployee