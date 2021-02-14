import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

import User from "./User/User";

const getUsers = async () =>
  await await axios.get("/users").then(({ data }) => data);

const Users = () => {
  const { data, isLoading, error } = useQuery("users", getUsers);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((user) => <User key={user.id} user={user} />)}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
