import { useState } from "react";
import { Data } from "../data/data";
import * as XLSX from 'xlsx'
import axios from "axios";

function NewUpload() {
    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);

    const [excelData, setExcelData] = useState(null);
    
    const fileType=['application/vnd.ms-excel'];
    const handleFile = (e) => {
        let selectedFile = e.target.files[0];
        if(selectedFile){
            if(selectedFile&&fileType.includes(selectedFile.type)){
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload=(e)=>{
                    setExcelFileError(null);
                    setExcelFile(e.target.result);
                }
            }
            else{
                setExcelFileError('Please select only excel file Types!!');
                selectedFile(null);
            }
        }
        else{
            console.log("Please select a File")
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(excelFile !== null){
            const workbook = XLSX.read(excelFile,{type:'buffer'});
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data); 
            console.log(excelData)   
        }
        else{
            setExcelData(null);
        }
    }
    

    // const handleUpload = async(event)=>{
    //     event.preventDefault();
    //     try {
    //     const newBitlocker={
            
    //       computerName: excelData.computerNames,
    //       serviceTag: excelData.serviceTags,
    //       currentUser: excelData.currentUsers,
    //       remoteOffice: excelData.remoteOffices,
    //       driveName: excelData.driveNames,
    //       driveType: excelData.driveTypes,
    //       proStatus: excelData.proStatuses,
    //       encryStatus: excelData.encryStatuses,
    //       lockStatus: excelData.lockStatuses,
    //       encryMethod: excelData.encryMethods,
    //       recKey: excelData.recKeys
            
    //     }
    //     //   await axios.post(`http://localhost:5000/api/bitlocker/`, newBitlocker);
    //       console.log("NewB", newBitlocker);
    //       } catch (error) {
    //        console.log(error.response);
    //      }
    //     };

    return(
        <div className="container">

            <div className='form'>
                <form className="from-group" autoComplete="off" onSubmit={handleSubmit}>
                    <label>
                        <h5>Upload Excel File</h5>
                    </label>
                    <br/>
                    <input type="file" className='form-control' onChange={handleFile} required></input>
                        {excelFileError&&<div className='text-danger'
                         style={{marginTop:5+'px'}}>{excelFileError}</div>}
                    <button type="submit" className="btn btn-success" style={{marginTop:5+'px'}}>Submit</button>
                        {/* <div> 
                            <form onsubmit ={handleUpload}>
                                <button type="submit">Submit Entry</button>
                            </form>
                        </div> */}
                </form>
            </div>
            <br />
            <hr />
            <h5>Viewer</h5>
            <div className="viewer">
                {excelData===null&&<>No file selected</>}
                {excelData!==null&&(
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Computer Name</th>
                                    <th scope="col">serviceTag</th>
                                    <th scope="col">currentUser</th>
                                    <th scope="col">remoteOffice</th>
                                    <th scope="col">driveName</th>
                                    <th scope="col">driveType</th>
                                    <th scope="col">proStatus</th>
                                    <th scope="col">encryStatus</th>
                                    <th scope="col">lockStatus</th>
                                    <th scope="col">encryMethod</th>
                                    <th scope="col">recKey</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Data excelData={excelData}/>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NewUpload;