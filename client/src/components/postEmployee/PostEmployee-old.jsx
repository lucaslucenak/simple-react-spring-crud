import React from 'react'
import './postEmployee.css'
import {useState} from 'react'
import axios from 'axios'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap/'

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
      <div className="information">
        <Form>
          <FormGroup floating>
            <Input id="exampleEmail" name="email" placeholder="Email" type="email" onChange= {
              (event) => {setName(event.target.value);}
              } />
            <Label for="exampleEmail">
              Email
            </Label>
          </FormGroup>

          {' '}

          <FormGroup floating>
            <Input id="examplePassword" name="password" placeholder="Password" type="password" />
            <Label for="examplePassword">
              Password
            </Label>
          </FormGroup>

          {' '}

          <FormGroup floating>
            <Input id="exampleEmail" name="email" placeholder="Email" type="email" onChange= {
              (event) => {setName(event.target.value);}
              } />
            <Label for="exampleEmail">
              Email
            </Label>
          </FormGroup>

          {' '}

          <FormGroup floating>
            <Input id="exampleEmail" name="email" placeholder="Email" type="email" onChange= {
              (event) => {setName(event.target.value);}
              } />
            <Label for="exampleEmail">
              Email
            </Label>
          </FormGroup>

          {' '}

          <FormGroup floating>
            <Input id="exampleEmail" name="email" placeholder="Email" type="email" onChange= {
              (event) => {setName(event.target.value);}
              } />
            <Label for="exampleEmail">
              Email
            </Label>
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </div>
    </section>
  )
}

export default PostEmployee