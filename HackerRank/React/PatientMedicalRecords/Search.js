import React from "react";
import medical_records from "../medicalRecords";

function Search({ setRecord, setId, id }) {

  const handleOnChange = (id) => {
    setId(id)
  }

  const handleOnShow = () => {
    if (!id) {
      alert('Please select a patient name')
      return
    }
    setRecord(medical_records.find(item => item.id === id))
  }

  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select data-testid="patient-name" defaultValue={id} onChange={(e) => handleOnChange(e.target.value)}>
          <option value="0" disabled>
            Select Patient
          </option>
          {medical_records.map(item => (
            <option key={item.id} value={item.id}>{item.data[0].userName}</option>
          ))}
        </select>
      </div>

      <button type="submit" data-testid="show" onClick={handleOnShow}>
        Show
      </button>
    </div>
  );
}

export default Search;
