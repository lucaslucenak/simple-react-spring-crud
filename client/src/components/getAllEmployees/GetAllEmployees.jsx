import React from 'react'
import './getAllEmployees.css'
import {useState, useEffect} from 'react'
import axios from 'axios'

async function getAllEmployees() {
    const employees = await axios.get('http://localhost:8080/employee/');
    console.log(employees.data);
    return employees.data;
}

const GetAllEmployees = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/employee/').then(response => response.json()).then(data => setEmployees(data))
  }, [])


  return (
    <section id="getAllEmployees">
      {
        employees.map(employee => {
          return (
            <table border="1" cellspacing="0" cellpadding="1">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Country</td>
                <td>Position</td>
                <td>Wage (year)</td>
              </tr>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.country}</td>
                <td>{employee.position}</td>
                <td>{employee.wage}</td>
              </tr>
            </table>
            // <div key={employee.id}>
            //   <table border="1">
            //     <tr>
            //       td
            //     </tr>
            //   </table>
            //   <span>Id: {employee.id}</span>
            // </div>
          )
        })
      }
    </section>
  )
}

export default GetAllEmployees