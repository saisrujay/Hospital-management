import React from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div>
      <h2>User Details:</h2>
      <table className="table table-striped table-bordered">
        <tbody>
          <tr>
            <td className="table-label">Name:</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td className="table-label">Age:</td>
            <td>{user.age}</td>
          </tr>
          <tr>
            <td className="table-label">Gender:</td>
            <td>{user.gender}</td>
          </tr>
          <tr>
            <td className="table-label">UHID:</td>
            <td>{user.uhid}</td>
          </tr>
          <tr>
            <td className="table-label">OPID:</td>
            <td>{user.opid}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Details;
