import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

const PostEmployee = () => {
    const [firstName, setFisrtName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [position, setPosition] = useState('');
    const [wage, setWage] = useState(0);
  
    const addEmployee = () => {
      axios.post('http://localhost:8080/employee/', {
        first_name: firstName,
        last_name: lastName,
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
      <div className="information">
        <Form>
          <FormGroup floating>
            <Input id="firstName" name="firstName" placeholder="First Name" type="text" onChange= {
                (event) => {setFisrtName(event.target.value);}
                } />
            <Label for="exampleEmail">First Name</Label>
            </FormGroup>

            {' '}

            <FormGroup floating>
                <Input id="lastName" name="lastName" placeholder="Last Name" type="text" onChange= {
                    (event) => {setLastName(event.target.value);}
                } />
                <Label for="examplePassword">Last Name</Label>
            </FormGroup>

            {' '}

            <FormGroup floating>
                <Input id="age" name="age" placeholder="Age" type="number" onChange= {
                (event) => {setAge(event.target.value);}
                } />
                <Label for="exampleEmail">Age</Label>
            </FormGroup>

            {' '}

            <FormGroup floating>
                <Input id="country" name="country" placeholder="Country" type="text" onChange= {
                (event) => {setCountry(event.target.value);}
                } />
                <Label for="exampleEmail">Country</Label>
            </FormGroup>

            {' '}

            <FormGroup floating>
                <Input id="position" name="position" placeholder="Position" type="text" onChange= {
                    (event) => {setPosition(event.target.value);}
                    } />
                <Label for="exampleEmail">Position</Label>
            </FormGroup>

            {' '}

            <FormGroup floating>
                <Input id="wage" name="wage" placeholder="Wage" type="number" onChange= {
                    (event) => {setWage(event.target.value);}
                    } />
                <Label for="exampleEmail">Wage</Label>
            </FormGroup>

          <Button onClick={addEmployee}>Submit</Button>
        </Form>
      </div>
    </section>
  )
}

export default PostEmployee