import React, { useRef, useState } from 'react';
import { Roles } from 'meteor/alanning:roles';
import { Button, Card, Col, Container, Row, Modal } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import fileTypeChecker from 'file-type-checker';
import swal from 'sweetalert';
import * as XLSX from 'xlsx';
import { FaFileUpload } from 'react-icons/fa';
import ManageProjectionsTable from '../components/ManageProjectionsTable';
import { PAGE_IDS } from '../utilities/PageIDs';
import { UserVerification } from '../../api/user/UserVerificationCollection';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all the ProjectionGraphs documents. */
const ManageProjections = () => {
  // uses the same code from ImportSheet.jsx (with some styling modifications) for the Upload .CSV button
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

  const [showModal, setShowModal] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);
  const fileInputRef = useRef(null);

  // Transforms json data into a format used by react-spreadsheet
  const transformData = (tData) => {
    const newTData = tData.map((row) => (
      row.map((cell) => ({ value: cell }))
    ));
    return newTData;
  };

  const handleFileUpload = (e) => {
    console.log(e);
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
      <Container className="py-3" id={PAGE_IDS.MANAGE_PROJECTIONS}>
        <Row>
          <Col className="d-flex flex-column">
            {/* Company Title is either a default "Company Name" or the currentUser's profile's companyName variable value */}
            <h1 className="company-title">{currentUserID?.profile?.companyName || 'Company Name'}</h1>
            <h3>Create New Projection</h3>
            <Col sm={2} className="d-flex flex-column mx-4">
              <Button className="mb-2" onClick={() => setShowModal(true)}>
                Upload .CSV File
              </Button>

              <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Import File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Card>
                    <Card.Body>
                      <Card.Title className="text-style text-center"><h2>Upload File</h2></Card.Title>
                      <Card.Subtitle className="mb-2 text-muted text-center text-style">Supported files: .xlsx or
                        .csv
                      </Card.Subtitle>
                      <Row className="justify-content-center mx-auto">
                        <Col className="col-10">
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
                            <FaFileUpload size="100px" className="mb-2" />
                            <p className="mb-0 small">Drag & Drop your files here or click to upload</p>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Modal.Body>
              </Modal>
              <Button>Manual Input Form</Button>
            </Col>
          </Col>
        </Row>
        <Row className="justify-content-center pt-4">
          <Col md={10}>
            <Col><h2>Manage Projections</h2></Col>
            <ManageProjectionsTable />
          </Col>
        </Row>
      </Container>
    ) : (
      <Container fluid>
        <h3>Loading</h3>
      </Container>
    )
    );
  }
  return (<LoadingSpinner />);
};

export default ManageProjections;
