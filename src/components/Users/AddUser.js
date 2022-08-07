import React, { useState } from 'react';

import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModel';
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const { error, setError } = useState('');
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age"
      });
      return;
    } if (enteredAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter  age"
      });
      return;

    }
    console.log(enteredUsername);
    console.log(enteredAge);
    props.onAddUser(enteredUsername, enteredAge);
  };


  const usernameChangeHandler = (event) => {
    console.log("enteredUsername=", enteredUsername);
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
    console.log("enteredAge=", enteredAge);
    setEnteredAge(event.target.value);
  }
  const errorHandler = ()=>{
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={props.title} message={props.message} onConfirm={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;