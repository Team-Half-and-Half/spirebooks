import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import Spreadsheet from 'react-spreadsheet';
import { Container } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const ImportSheet = () => {
  const [data, setData] = useState(null);

  const transformData = (tData) => {
    const newTDAta = tData.map((row) => (
      row.map((cell) => ({ value: cell }))
    ));
    return newTDAta;
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileData = new Uint8Array(event.target.result);
      const workbook = XLSX.read(fileData, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      setData(transformData(sheetData));
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <Container fluid id={PAGE_IDS.IMPORT}>
      <input type="file" onChange={handleFileUpload} />
      {data && (
        <div>
          <h3>Imported Data:</h3>
          <Spreadsheet data={data} onChange={setData} />
        </div>
      )}
    </Container>
  );
};

export default ImportSheet;
