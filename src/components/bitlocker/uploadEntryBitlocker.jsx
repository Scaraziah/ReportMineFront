import React, { useState } from "react";
import axios from 'axios';
import "./bitlocker.css"
import { IndividualData } from "../data/individualData";

function UploadEntryBitLocker() {
  const newData = IndividualData
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

//   const handleComputerName = (event) => {
//     setComputerNames(event.target.value);
//   };

//   const handleServiceTag = (event) => {
//     setServiceTags(event.target.value);
//   };

//   const handleCurrentUser = (event) => {
//     setCurrentUsers(event.target.value);
//   };

//   const handleRemoteOffice = (event) => {
//     setRemoteOffices(event.target.value);
//   };

//   const handleDrverName = (event) => {
//     setDriveNames(event.target.value);
//   };

//   const handleDriverType = (event) => {
//     setDriveTypes(event.target.value);
//   };

//   const handleProStatus = (event) => {
//     setProStatuses(event.target.value);
//   };

//   const handleEncryStatus = (event) => {
//     setEncryStatuses(event.target.value);
//   };

//   const handleLockStatus = (event) => {
//     setLockStatuses (event.target.value);
//   };

//   const handleEncryMethods = (event) => {
//     seteEcryMethods(event.target.value);
//   };

//   const handleRecKey = (event) => {
//     setRecKeys (event.target.value);
//   };

  const handleSubmit = async(event, newData)=>{
    event.preventDefault();
    console.log(newData)
//     try {
//     const newBitlocker={
//       computerName: computerNames,
//       serviceTag: serviceTags,
//       currentUser: currentUsers,
//       remoteOffice: remoteOffices,
//       driveName: driveNames,
//       driveType: driveTypes,
//       proStatus: proStatuses,
//       encryStatus: encryStatuses,
//       lockStatus: lockStatuses,
//       encryMethod: encryMethods,
//       recKey: recKeys
//     }
//       await axios.post(`http://localhost:5000/api/bitlocker/`, newBitlocker);
//       console.log(newBitlocker.data);
//       } catch (error) {
//        console.log(error.response);
//      }
    };

    return(
    <div>
      <h2>Add New Entry</h2>
        <form onSubmit={handleSubmit}>
            <div>
             <button type="submit">Upload Entry</button>
           </div>
         </form>
    </div>
)};

export default UploadEntryBitLocker;