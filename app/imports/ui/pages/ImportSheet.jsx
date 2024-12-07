import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useRef } from 'react';
import * as XLSX from 'xlsx';
import swal from 'sweetalert';
import { FaFileUpload } from 'react-icons/fa';
import fileTypeChecker from 'file-type-checker';
// import Spreadsheet from 'react-spreadsheet';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import { UserVerification } from '../../api/user/UserVerificationCollection';
import LoadingSpinner from '../components/LoadingSpinner';
import { cleanData } from '../utilities/ImportFunctions';
import { auditedBalanceImport } from '../utilities/AuditedBalanceImportFunc';
import { budgetPLImport } from '../utilities/BudgetP&LImportFunc';
import { auditedFSImport } from '../utilities/AuditedFSImportFunc';
import { AuditedBalance } from '../../api/spreadsheet/AuditedBalanceCollection';
import { defineMethod } from '../../api/base/BaseCollection.methods';
import { BudgetPL } from '../../api/spreadsheet/BudgetPLCollection';
import { AuditedFS } from '../../api/spreadsheet/AuditedFSCollection';

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

  // const [data, setData] = useState(null);
  const fileInputRef = useRef(null);

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
        const auditedBalanceSheet = workbook.Sheets[workbook.SheetNames[4]];
        const auditedBalanceSheetData = XLSX.utils.sheet_to_json(auditedBalanceSheet, { header: 1 });

        const budgetPLSheet = workbook.Sheets[workbook.SheetNames[5]];
        const budgetPLSheetData = XLSX.utils.sheet_to_json(budgetPLSheet, { header: 1 });

        const auditedFSSheet = workbook.Sheets[workbook.SheetNames[6]];
        const auditedFSSheetData = XLSX.utils.sheet_to_json(auditedFSSheet, { header: 1 });

        // setData(transformData(auditedBalanceSheetData));

        const ABData = auditedBalanceImport(cleanData(auditedBalanceSheetData));
        for (let i = 0; i <= ABData.LiabilitiesSingleYears.len; i++) {
          const collectionName = AuditedBalance.getCollectionName();
          const sepABData = {
            owner: currentUserID,
            year: i,
            green: true,
            CashAndCashEquivalents: ABData.CashAndCashEquivalentsSingleYears[i],
            OtherAssets: ABData.OtherAssetsSingleYears[i],
            Liabilities: ABData.LiabilitiesSingleYears[i],
            NetPosition: ABData.NetPositionSingleYears[i] };
          defineMethod.callPromise({ collectionName, sepABData })
            .catch(error => swal('Error', error.message, 'error'))
            .then(() => swal('Success', 'Item updated successfully', 'success'));
        }

        const BPLData = budgetPLImport(cleanData(budgetPLSheetData));
        for (let i = 0; i <= BPLData.RevenueSingleYears.len; i++) {
          const collectionName = BudgetPL.getCollectionName();
          const sepBPLData = {
            owner: currentUserID,
            year: i,
            green: true,
            Revenue: BPLData.RevenueSingleYears[i],
            Expenses: BPLData.ExpensesSingleYears[i],
            ExpenditurePerAudited: BPLData.ExpenditurePerAuditedSingleYears[i] };
          defineMethod.callPromise({ collectionName, sepBPLData })
            .catch(error => swal('Error', error.message, 'error'))
            .then(() => swal('Success', 'Item updated successfully', 'success'));
        }

        const AFSData = auditedFSImport(cleanData(auditedFSSheetData));
        for (let i = 0; i <= AFSData.NetAssetsSingleYears.len; i++) {
          const collectionName = AuditedFS.getCollectionName();
          const sepAFSData = {
            owner: currentUserID,
            year: i,
            green: true,
            FundBalances: AFSData.FundBalancesSingleYears[i],
            Expenditures: AFSData.ExpendituresSingleYears[i],
            GeneralRevenues: AFSData.GeneralRevenuesSingleYears[i],
            ProgramRevenues: AFSData.ProgramRevenuesSingleYears[i],
            NetAssets: AFSData.NetAssetsSingleYears[i],
            Liabilities: AFSData.LiabilitiesSingleYears[i],
            OtherAssets: AFSData.OtherAssetsSingleYears[i],
            CashAndCashEquivalents: AFSData.CashAndCashEquivalentsSingleYears[i] };
          defineMethod.callPromise({ collectionName, sepAFSData })
            .catch(error => swal('Error', error.message, 'error'))
            .then(() => swal('Success', 'Item updated successfully', 'success'));
        }

      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleChange = (e) => {
    const files = e.target.files; // Get selected files
    handleFileUpload(files); // Process files
  };
  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
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
        {/* {!data && ( */}
        <Row className="p-4">
          <Col className="col-3" />
          <Col className="col-6">
            <Card className="w-100 p-3">
              <Card.Body>
                <Card.Title className="text-style text-center"><h2>Import File</h2></Card.Title>
                <Card.Subtitle className="mb-2 text-muted text-center text-style">Supported file: .xlsm
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
                      <p>Drag & Drop your Financial Model Spreadsheet</p>
                    </Card.Body>
                  </Col>
                  <Col className="col-3" />
                </Row>
              </Card.Body>
            </Card>
            <Col className="col-3" />
          </Col>
        </Row>
        {/* )} */}
        {/* {data && ( */}
        {/*  <div> */}
        {/*    <h3>Imported Data:</h3> */}
        {/*    <Spreadsheet data={data} onChange={setData} /> */}
        {/*  </div> */}
        {/* )} */}
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
