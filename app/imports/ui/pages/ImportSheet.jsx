import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ImportSheet = () => {
  const [data, setData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const fileData = new Uint8Array(event.target.result);
      const workbook = XLSX.read(fileData, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      setData(sheetData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {data && (
        <div>
          <h3>Imported Data:</h3>
          <pre>
            <table>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </pre>
        </div>
      )}
    </div>
  );
};

export default ImportSheet;
