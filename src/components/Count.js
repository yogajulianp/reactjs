import React, { useState, useEffect } from "react";
import "./Count.css";
import axios from "axios";

const AmbilDataRandom = () => {
  return axios.get("https://randomuser.me/api")
    .then(({data}) => {
      // handle success
      console.log(data);
      return JSON.stringify(data);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
    .then(() => {
      // always executed
      console.log("running");
    });
};

function Count() {
  const [hitung, setHitung] = useState(0);
  const [ambilDataRandomJSON, setAmbilDataRandomJSON] = useState("");

  useEffect(() => {
    AmbilDataRandom().then(randomData => {
        setAmbilDataRandomJSON(randomData || 'No user data ditemukan')
    })
  }, []);

  return (
    <div className="container">
      <p>Nilai saat ini :</p>
      <p>{hitung}</p>

      <div>
        <button onClick={() => setHitung((value) => value + 1)}>Tambah</button>

        <button
          onClick={() => {
            setHitung(hitung + 1);
            console.log("tambah");
          }}
        >
          Menambah
        </button>
        <button onClick={() => setHitung(hitung - 1)}>Kurang</button>
      </div>
      {/* <div>
        <button onClick={() => AmbilDataRandom()}>Ambil Random Data</button>
      </div> */}
      <div>
        <p>Datanya adalah</p>
        <div></div>
        <p>{ambilDataRandomJSON}</p>
      </div>
    </div>
  );
}

export default Count;
