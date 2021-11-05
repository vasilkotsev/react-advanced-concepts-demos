import React, { useState, Fragment } from "react";

import useGetAndSetData from "./customHooks/useGetAndSetData";

function Users() {
  const [users, setUsers] = useState([]);

  //custom hook call
  useGetAndSetData(setUsers);

  return (
    <Fragment>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Users;
