import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./bitlocker.css"

function Bitlocker() {

  const [bitlockers, setBitlockers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/bitlocker/`)
      .then((response) => {
        setBitlockers(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <body className="myTableHeader">
      <div className="app-container">
        <div>
          <table striped bordered hover>
            <thead>
              <tr className = "myTableHeader">
                <th>Computer Name</th>
                <th>serviceTag</th>
                <th>currentUser</th>
                <th>remoteOffice</th>
                <th>driveName</th>
                <th>driveType</th>
                <th>proStatus</th>
                <th>encryStatus</th>
                <th>lockStatus</th>
                <th>encryMethod</th>
                <th>recKey</th>
              </tr>
            </thead>
            <tbody id="Bitlocker_Report">
              {bitlockers.map((bitlocker) =>{
                return (
                <tr>
                <td>{bitlocker.computerName}</td>
                <td>{bitlocker.serviceTag}</td>
                <td>{bitlocker.currentUser}</td>
                <td>{bitlocker.remoteOffice}</td>
                <td>{bitlocker.driveName}</td>
                <td>{bitlocker.driveType}</td>
                <td>{bitlocker.proStatus}</td>
                <td>{bitlocker.encryStatus}</td>
                <td>{bitlocker.lockStatus}</td>
                <td>{bitlocker.encryMethod}</td>
                <td>{bitlocker.recKey}</td>
              </tr>
              )
            })}             
            </tbody>
          </table>
        </div>
        
      </div>
    </body>
  );
};

export default Bitlocker;