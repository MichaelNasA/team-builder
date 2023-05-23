import React, { useState } from 'react';
import Form from './Components/Form';

function App() {
  const[members, setMambers] = useState([]);
  const [values, setValues] = useState({name:'', email:'', role:'' });

  const onSubmit = () => {
    setMambers([values, ...members]);
    setValues({name:'', email:'', role:'' })
  }

  const onChange = (name, values) => {
    setValues({ ... values, [name]: values}) 
  }

  return (
    <div className="App">
      <h1>Team Builder App!!</h1>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}
      />
      {members.map((members, idx) => {
          return(
            <div key={idx}>
              {members.email}, {members.name}, {members.role}
            </div>
          )
      })}
    </div>
  );
}

export default App;
