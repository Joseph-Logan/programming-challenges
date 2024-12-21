import React, {useState, useCallback, useEffect} from "react";
import "./App.css";
import "h8k-components";
import Search from "./components/Search";
import Records from "./components/Records";
import medical_records from "./medicalRecords";


const title = "Patient Medical Records";

const App = () => {
  const [id, setId] = useState(0)
  const [records, setRecords] = useState(null)
  const [isSelected, setSelected] = useState(false)

  const handleIsSelected = useCallback(() => {
    setSelected(!!records)
  }, [records])

  const handleOnNext = () => {
    const currentArrayId = medical_records.findIndex(item => item.id === id);
    const nextIndex = (currentArrayId + 1) % medical_records.length;
  
    setId(medical_records[nextIndex].id);
    setRecords(medical_records[nextIndex]);
  }

  useEffect(() => {
    handleIsSelected()
  }, [records])

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="content">
        <Search setId={setId} setRecord={setRecords} id={id} />
        {isSelected && <Records records={records} handleOnNext={handleOnNext} />}
      </div>
    </div>
  );
};

export default App;
