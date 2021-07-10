import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Entry missing',
        message: 'Please enter a value in every field',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Wrong age value',
        message: 'Entered age should be > 0',
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const cancelError = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={cancelError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' ref={nameInputRef} />
            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type='number' ref={ageInputRef} />
            <Button type='submit'>Add User</Button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
