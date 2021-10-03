import React from "react";
import {Table} from 'react-bootstrap';

const Tabel = ({products, editData}) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nama Baju</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
            {products.map((products, index) =>{
                return (
                    <tr key={products[0]}>
                    <td>{index + 1}</td>
                    <td>{products.nama}</td>
                    <td>{products.deskripsi}</td>
                    <td>{products.harga}</td>
                    <td>
                      <button className="btn btn-warning" onClick={()=> editData(products.id)} >Edit</button>
                    </td>
                  </tr>
                )
            })}
        
    
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;