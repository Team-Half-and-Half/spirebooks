import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import swal from 'sweetalert';
import { FaFileUpload } from 'react-icons/fa';
import fileTypeChecker from 'file-type-checker';
import Spreadsheet from 'react-spreadsheet';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import { UserVerification } from '../../api/user/UserVerificationCollection';
import LoadingSpinner from '../components/LoadingSpinner';

const ImportSheet = () => {
  const currentUserID = Meteor.userId();
  const { verificationStatus, ready } = useTracker(() => {
    const sub = Meteor.subscribe(UserVerification.userPublicationName);
    const rdy = sub.ready();
    const currentVerification = UserVerification.collection.find({ userID: currentUserID }).fetch();
    return {
      verificationStatus: currentVerification,
      ready: rdy && sub,
    };
  }, []);

  const [data, setData] = useState(null);
  const fileInputRef = useRef(null);

  // Transforms json data into a format used by react-spreadsheet
  const transformData = (tData) => {
    const newTDAta = tData.map((row) => (
      row.map((cell) => ({ value: cell }))
    ));
    return newTDAta;
  };

  // Data Collection
  const collectData = (sheetData) => {
    // Clears empty slots caused by spaces in cells
    const innerEmptyRemoved = sheetData.map(innerArray => innerArray.filter(item => item != null && item !== ''));
    const emptyRemoved = innerEmptyRemoved.filter(innerArray => innerArray.length > 0);

    // Removes unnecessary data caused by xlsx formatting
    const unnecessaryData = ['Audited FS, Statement of Net Position', 'Audited FS, Investment Footnote', 'Audited FS, Capital Assets Footnote', 'Audited FS, Long-Term Liabilities Footnote'];
    const unnecessaryDataRemoved = emptyRemoved.map(innerArray => innerArray.filter(item => !unnecessaryData.includes(item)));

    console.log(unnecessaryDataRemoved);
  };

  const handleFileUpload = (e) => {
    const file = e[0];
    // const file = e.target.files[0];
    const reader = new FileReader();

    // Converts xlsx into json file format
    reader.onload = (event) => {

      // Checks if xlsx file was uploaded using 'magic numbers'
      const detectedFile = fileTypeChecker.detectFile(reader.result);
      if (JSON.stringify(detectedFile.signature.sequence) !== JSON.stringify(['50', '4b', '3', '4'])) {
        swal('Error!', 'Wrong file type', 'error');
      } else {
        swal('Success!', 'File uploaded successfully', 'success');
        const fileData = new Uint8Array(event.target.result);
        const workbook = XLSX.read(fileData, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        setData(transformData(sheetData));
        collectData(sheetData);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleChange = (e) => {
    const files = e.target.files; // Get selected files
    handleFileUpload(files); // Process files
  };
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const handleClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };
  const handleDrop = (e) => {
    preventDefaults(e); // Prevent default behavior
    const dt = e.dataTransfer;
    const files = dt.files; // Get dropped files

    handleFileUpload(files); // Process files
  };

  if (ready) {
    return ((Roles.userIsInRole(currentUserID, 'ADMIN') || verificationStatus[0].verification) ? (
      <Container fluid id={PAGE_IDS.IMPORT}>
        {!data && (
          <Row className="p-4">
            <Col className="col-3" />
            <Col className="col-6">
              <Card className="w-100 p-3">
                <Card.Body>
                  <Card.Title className="text-style text-center"><h2>Import File</h2></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted text-center text-style">Supported files: .xlsx or
                    .csv
                  </Card.Subtitle>
                  <Row className="p-2">
                    <Col className="col-3" />
                    <Col className="col-6">
                      <Card.Body
                        className="drag-and-drop-area"
                        onClick={handleClick} // Click event to open file dialog
                        onDragEnter={(e) => { preventDefaults(e); }}
                        onDragOver={(e) => { preventDefaults(e); }}
                        onDrop={handleDrop}
                      >
                        <input
                          type="file"
                          ref={fileInputRef}
                          style={{ display: 'none' }} // Hide the file input
                          multiple // Allow multiple file selection
                          onChange={handleChange} // Handle file selection
                        />
                        <FaFileUpload size="100px" />
                        <p>Drag & Drop your files here or click to upload</p>
                      </Card.Body>
                    </Col>
                    <Col className="col-3" />
                  </Row>
                </Card.Body>
              </Card>
              <Col className="col-3" />
            </Col>
          </Row>
        )}
        {data && (
          <div>
            <h3>Imported Data:</h3>
            <Spreadsheet data={data} onChange={setData} />
          </div>
        )}
      </Container>
    ) : (
      <Container fluid>
        <h3>User not verified to submit data.</h3>
      </Container>
    )
    );
  }
  return (<LoadingSpinner />);
};

export default ImportSheet;
