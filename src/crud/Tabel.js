import React from "react";
import {Table} from 'react-bootstrap';

const Tabel = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nama Baju</th>
            <th>Warna</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Gamis Ceruti</td>
            <td>Kuning</td>
            <td>215000</td>
            <td></td>
          </tr>
    
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;