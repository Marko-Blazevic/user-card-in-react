import { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Error from '../UI/Error';

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

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
    setEnteredName('');
    setEnteredAge('');
  };

  const cancelError = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          errorHandler={cancelError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              id='username'
              type='text'
              onChange={nameChangeHandler}
              value={enteredName}
            ></input>
            <label htmlFor='age'>Age (Years)</label>
            <input
              id='age'
              type='number'
              onChange={ageChangeHandler}
              value={enteredAge}
            ></input>
            <Button type='submit'>Add User</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
