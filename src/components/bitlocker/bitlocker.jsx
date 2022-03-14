import React, { useState } from "react";
import {nanoid} from 'nanoid'
import { navigate } from "react-router-dom";


const Bitlocker = () => {
  const [bitlockers, setBitlockers] = useState(data);
  const [addFormData, setAddFormData] =useState({
    computerName: '',
    serviceTag: '',
    currentUser: '',
    remoteOffice: '',
    driveName: '',
    driveType: '',
    proStatus: '',
    encryStatus: '',
    lockStatus: '',
    encryMethod: '',
    recKey: ''
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
  
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  };

  const handleAddFormSubmit = async(event)=>{
          event.preventDefault();
          const bitlocker={
            computerName: computerName,
            serviceTag: serviceTag,
            currentUser: currentUser,
            remoteOffice: remoteOffice,
            driveName: driveName,
            driveType: driveType,
            proStatus: proStatus,
            encryStatus: encryStatus,
            lockStatus: lockStatus,
            encryMethod: encryMethod,
            recKey: recKey
             }
             console.log(bitlocker)
             await axios.post(`http://localhost:5000/api/bitlocker/`, bitlocker)
             navigate(`/bitlocker`)
          }; 

    const newBitlocker = {
      id: nanoid(),
      computerName: addFormData.computerName,
      serviceTag: addFormData.serviceTag,
      currentUser: addFormData.currentUser,
      remoteOffice: addFormData.remoteOffice,
      driveName: addFormData.driveName,
      driveType: addFormData.computerName,
      proStatus: addFormData.serviceTag,
      encryStatus: addFormData.currentUser,
      lockStatus: addFormData.remoteOffice,
      encryMethod: addFormData.driveName,
      recKey: addFormData.recKey
    };

    const newBitlockers = [...bitlockers, newBitlocker];
    setEpisodes(newBitlockers)
  };

return <div className="app-container">
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
        <td>{episode.computerName}</td>
        <td>{episode.serviceTag}</td>
        <td>{episode.currentUser}</td>
        <td>{episode.remoteOffice}</td>
        <td>{episode.driveName}</td>
        <td>{episode.driveType}</td>
        <td>{episode.proStatus}</td>
        <td>{episode.encryStatus}</td>
        <td>{episode.lockStatus}</td>
        <td>{episode.encryMethod}</td>
        <td>{episode.recKey}</td>
      </tr>
      ))}
      
    </tbody>
  </table>

  <h2>Add New Episodes</h2>
  <form onSubmit={handleAddFormSubmit}>
    <input
      type = "text"
      name="computerName"
      required="required"
      placeholder="computerName"
      onChange={handleAddFormChange}
    />
    <input
      type = "text"
      name="serviceTag"
      required="required"
      placeholder="serviceTag"
      onChange={handleAddFormChange}
    />
    <input
      type = "text"
      name="currentUser"
      required="required"
      placeholder="currentUser"
      onChange={handleAddFormChange}
    />
    <input
      type = "text"
      name="remoteOffice"
      required="required"
      placeholder="remoteOffice"
      onChange={handleAddFormChange}
    />
    <input
      type = "text"
      name="driveName"
      required="required"
      placeholder="driveName"
      onChange={handleAddFormChange}
    />
    <input
      type = "text"
      name="driveType"
      required="required"
      placeholder="driveType"
      onChange={handleAddFormChange}
    />
    <input
      type = "text"
      name="proStatus"
      required="required"
      placeholder="proStatus"
      onChange={handleAddFormChange}
    />
    <input
      type = "text"
      name="encryStatus"
      required="required"
      placeholder="encryStatus"
      onChange={handleAddFormChange}
    />
    <input
      type = "text"
      name="lockStatus"
      required="required"
      placeholder="lockStatus"
      onChange={handleAddFormChange}
    />
    <input
      type = "text"
      name="encryMethod"
      required="required"
      placeholder="encryMethod"
      onChange={handleAddFormChange}
    />
    <input
      type = "recKey"
      name="driveName"
      required="required"
      placeholder="recKey"
      onChange={handleAddFormChange}
    />
    <button type="submit">New Bitlocker Entry</button>
  </form>
</div>
};

export default Bitlocker;