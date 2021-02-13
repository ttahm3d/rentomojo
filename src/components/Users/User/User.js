import React from 'react';
import  {NavLink} from 'react-router-dom';

const User = ({user}) => {
  return (
    <>
      <tr>
        <td>{user.name}</td>
        <td>{user.company.name}</td>
        <td><NavLink to={"/posts?userId=" + user.id}>View Posts</NavLink> </td>
      </tr>
    </>
  )
};  

export default User;