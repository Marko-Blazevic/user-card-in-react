import React, { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

function App() {
  const [userList, setUserList] = useState('');

  const addUserHandler = (userName, userAge) => {
    setUserList((previousUserList) => {
      return [
        ...previousUserList,
        { id: Math.random().toString(), name: userName, age: userAge },
      ];
    });
  };

  const removeUserHandler = (id) => {
    const reducedUserList = userList.filter((user) => user.id !== id);
    setUserList(reducedUserList);
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      {userList && (
        <UsersList users={userList} onRemoveUser={removeUserHandler} />
      )}
    </React.Fragment>
  );
}

export default App;
