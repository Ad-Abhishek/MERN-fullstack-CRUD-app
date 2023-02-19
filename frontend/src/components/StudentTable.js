import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button"

export default function StudentTable({ student }) {
    
  return (
    <div className="m-5">

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th> Email</th>
            <th> ENroll number</th>
            <th> Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.map((u, index) => {
            return (
              <tr key={index}>
                <td>{u._id}</td>
                <td>{u.email}</td>
                <td>{u.enrollnumber}</td>
                <td>{u.name}</td> 
                <td>
                    <Button className="btn btn-danger m-1 " >
                    <i class="bi bi-trash3-fill"></i>
                    </Button>
                    <Button className="btn btn-success">
                    <i class="bi bi-pencil-fill"></i>
                    </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}