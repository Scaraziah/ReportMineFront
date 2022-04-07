import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.computerName}</th>
            <th>{individualExcelData.serviceTag}</th>
            <th>{individualExcelData.remoteOffice}</th>
            <th>{individualExcelData.driveName}</th>
            <th>{individualExcelData.driveType}</th>
            <th>{individualExcelData.proStatus}</th>
            <th>{individualExcelData.encryStatus}</th>
            <th>{individualExcelData.lockStatus}</th>
            <th>{individualExcelData.encryMethod}</th>
            <th>{individualExcelData.recKey}</th>
        </>
    )
}
