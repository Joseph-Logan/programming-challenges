import React from "react";

function Records({ records, handleOnNext }) {
  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
       <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
          <h4 id="patient-name">{records.data[0].userName}</h4>
          <h5 id="patient-dob">DOB: {records.data[0].userDob}</h5>
          <h5 id="patient-height">Height: {records.data[0].meta.height} cm</h5>
        </div>
        <button className="mt-10 mr-10" data-testid="next-btn" onClick={handleOnNext}>
          Next
        </button>
      </div>

      <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
          {records.data.map((item, index) => (
            <tr key={item.id}>
              <td>{index +=1}</td>
              <td>{item.userDob.replace(/-/g, "/")}</td>
              <td>{item.diagnosis.name}</td>
              <td>{item.meta.weight}</td>
              <td>{item.doctor.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
