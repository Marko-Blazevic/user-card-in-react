import classes from './UsersList.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const UsersList = (props) => {
  const removeUser = (id) => {
    props.onRemoveUser(id);
  };
  return (
    <Card className={classes.users}>
      {props.users.length !== 0 && (
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
              <Button
                onClick={() => {
                  removeUser(user.id);
                }}
              >
                Remove User
              </Button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default UsersList;
