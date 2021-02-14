import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

import User from "./User/User";

import "./Users.css";
import Spinner from "../Spinner/Spinner";
const getUsers = async () =>
  await await axios.get("/users").then(({ data }) => data);

const Users = () => {
  const { data, isLoading, error } = useQuery("users", getUsers);

  return (
    <div className="container flex center table-container">
      {isLoading && <Spinner />}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Posts</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
