/* eslint-disable react/prop-types */

import { Table } from "react-bootstrap";
import EditUser from "./EditUser";

function UserTable({ userData, onSubmit }) {
  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>No.</th>
            <th>User name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password.slice(0, 3)}***</td>
              <td><EditUser onSubmit={onSubmit} userData={user} /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default UserTable;
