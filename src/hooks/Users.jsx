import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //adds async function, used as a wrapper for the request, because the 1st useEffect parameter cannot be async function
    async function getUsers() {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    }
    //call async function explicitly
    getUsers();
  });
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
