import React from 'react'
import './getAllEmployees.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Button} from 'reactstrap'

function deleteEmployeeById(id) {
  fetch(`http://localhost:8080/employee/${id}`, {
    method: 'DELETE'
  }).then((response) => {
    response.json().then((response) => {
      console.warn(response);
    })
  })
}

const GetAllEmployees = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/employee/').then(response => response.json()).then(data => setEmployees(data))
  }, [])

  return (
    <section id="getAllEmployees">
          return (
            <table border="1" cellspacing="0" cellpadding="1">
              <tr>
                <td>Id</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Age</td>
                <td>Country</td>
                <td>Position</td>
                <td>Wage (year)</td>
              </tr>
              {
                employees.map((employee) => 
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.first_name}</td>
                    <td>{employee.last_name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.country}</td>
                    <td>{employee.position}</td>
                    <td>{employee.wage}</td>
                    <td><Button color='danger' onClick={deleteEmployeeById(employee.id)}>Delete </Button></td>
                  </tr>
                )
              }
            </table>
          )
    </section>
  )
}

export default GetAllEmployees