import axios from "axios";
import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
  });

  useEffect(() => {
    api.get().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
          <p>
            {user.address.street}, {user.address.city}, {user.address.zipcode}
          </p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.company.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UserList;
