import React, { useState } from "react";
import {nanoid} from 'nanoid'
import { navigate } from "react-router-dom";
import axios from 'axios';

function Bitlocker() {

  const [bitlockers, setBitlockers] = useState();
  const [computerNames, setComputerNames] = useState ('');
  const [serviceTags, setServiceTags] = useState('');
  const [currentUsers, setCurrentUsers] = useState ('');
  const [remoteOffices, setRemoteOffices] = useState('');
  const [driveNames, setDriveNames] = useState('');
  const [driveTypes, setDriveTypes] = useState ('');
  const [proStatuses, setProStatuses] = useState('');
  const [encryStatuses, setEncryStatuses] = useState ('');
  const [lockStatuses, setLockStatuses] = useState('');
  const [encryMethods, seteEcryMethods] = useState ('');
  const [recKeys, setRecKeys] = useState('');

  // const [addFormData, setAddFormData] = useState({
  //   computerName: '',
  //   serviceTag: '',
  //   currentUser: '',
  //   remoteOffice: '',
  //   driveName: '',
  //   driveType: '',
  //   proStatus: '',
  //   encryStatus: '',
  //   lockStatus: '',
  //   encryMethod: '',
  //   recKey: ''
  // });

  // const fieldName = event.target.getAttribute('name');
  //   const fieldValue = event.target.value;

  //   const newFormData = {...addFormData};
  //   newFormData[fieldName] = fieldValue

  //   setAddFormData(newFormData)
  // };


  const handleComputerName = (event) => {
    setComputerNames(event.target.value);
  };

  const handleServiceTag = (event) => {
    setServiceTags(event.target.value);
  };

  const handleCurrentUser = (event) => {
    setCurrentUsers(event.target.value);
  };

  const handleRemoteOffice = (event) => {
    setRemoteOffices(event.target.value);
  };

  const handleDrverName = (event) => {
    setDriveNames(event.target.value);
  };

  const handleDriverType = (event) => {
    setDriveTypes(event.target.value);
  };

  const handleProStatus = (event) => {
    setProStatuses(event.target.value);
  };

  const handleEncryStatus = (event) => {
    setEncryStatuses(event.target.value);
  };

  const handleLockStatus = (event) => {
    setLockStatuses (event.target.value);
  };

  const handleEncryMethods = (event) => {
    seteEcryMethods(event.target.value);
  };

  const handleRecKey = (event) => {
    setRecKeys (event.target.value);
  };
  
  const handleSubmit = async(event)=>{
    event.preventDefault();
    const bitlocker={
      computerName: computerNames,
      serviceTag: serviceTags,
      currentUser: currentUsers,
      remoteOffice: remoteOffices,
      driveName: driveNames,
      driveType: driveTypes,
      proStatuse: proStatuses,
      encryStatus: encryStatuses,
      lockStatus: lockStatuses,
      encryMethod: encryMethods,
      recKey: recKeys
       }
       console.log(bitlocker)
       await axios.post(`http://localhost:5000/api/bitlocker/`, bitlocker)
       navigate(`/bitlocker`)
    };

  //   const newBitlocker = {
  //     computerName: addFormData.computerName,
  //     serviceTag: addFormData.serviceTag,
  //     currentUser: addFormData.currentUser,
  //     remoteOffice: addFormData.remoteOffice,
  //     driveName: addFormData.driveName,
  //     driveType: addFormData.computerName,
  //     proStatus: addFormData.serviceTag,
  //     encryStatus: addFormData.currentUser,
  //     lockStatus: addFormData.remoteOffice,
  //     encryMethod: addFormData.driveName,
  //     recKey: addFormData.recKey
  //   };

  //   const newBitlockers = [...bitlockers, newBitlocker];
  //   setBitlockers(newBitlockers)
  // };

  return (
    <body>
      <div className="app-container">
        <div>
          <table>
            <thead>
              <tr>
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
            <tbody>
              {bitlockers.map((bitlocker) =>(
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
              ))}             
            </tbody>
          </table>
        </div>
        <div>
          <h2>Add New Entry</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type = "computerName"
                name="computerName"
                required="required"
                placeholder="computerName"
                onChange={handleComputerName}
              />
              <input
                type = "serviceTag"
                name="serviceTag"
                required="required"
                placeholder="serviceTag"
                onChange={handleServiceTag}
              />
              <input
                type = "currentUser"
                name="currentUser"
                required="required"
                placeholder="currentUser"
                onChange={handleCurrentUser}
              />
              <input
                type = "remoteOffice"
                name="remoteOffice"
                required="required"
                placeholder="remoteOffice"
                onChange={handleRemoteOffice}
              />
              <input
                type = "driveName"
                name="driveName"
                required="required"
                placeholder="driveName"
                onChange={handleDrverName}
              />
              <input
                type = "driveType"
                name="driveType"
                required="required"
                placeholder="driveType"
                onChange={handleDriverType}
              />
              <input
                type = "proStatus"
                name="proStatus"
                required="required"
                placeholder="proStatus"
                onChange={handleProStatus}
              />
              <input
                type = "encryStatus"
                name="encryStatus"
                required="required"
                placeholder="encryStatus"
                onChange={handleEncryStatus}
              />
              <input
                type = "lockStatus"
                name="lockStatus"
                required="required"
                placeholder="lockStatus"
                onChange={handleLockStatus}
              />
              <input
                type = "encryMethod"
                name="encryMethod"
                required="required"
                placeholder="encryMethod"
                onChange={handleEncryMethods}
              />
              <input
                type = "driveName"
                name="driveName"
                required="required"
                placeholder="recKey"
                onChange={handleRecKey}
              />
              <button type="submit">New Bitlocker Entry</button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Bitlocker;