import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import swal from 'sweetalert';
import fileTypeChecker from 'file-type-checker';
import Spreadsheet from 'react-spreadsheet';
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FileUploadDropZone } from '@trimbleinc/modus-react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import { UserVerification } from '../../api/user/UserVerificationCollection';
import LoadingSpinner from '../components/LoadingSpinner';
import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap.min.css';

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

  // Transforms json data into a format used by react-spreadsheet
  const transformData = (tData) => {
    const newTDAta = tData.map((row) => (
      row.map((cell) => ({ value: cell }))
    ));
    return newTDAta;
  };
  const handleFileUpload = (upload) => {
    console.log(upload);
    // const file = e.target.files[0];
    const file = upload[0];
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
      }
    };
    reader.readAsArrayBuffer(file);
  }
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
                      <FileUploadDropZone
                        id="test1"
                        maxFileCount={1}
                        maxTotalFileSizeBytes={5242880}
                        // type="file"
                        accept=".xlsx,cvs/*"
                        style={{ maxWidth: '400px', height: '250px' }}
                        // onChange={handleFileUpload}
                        onFiles={(files) => handleFileUpload(files)}
                      />
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
