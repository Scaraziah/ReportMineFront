


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
  const newBitlocker={
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
     console.log(newBitlocker)
     await axios.post(`http://localhost:5000/api/bitlocker/`, newBitlocker)
  };


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