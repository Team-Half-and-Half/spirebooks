import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import React, { useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import swal from 'sweetalert';
import { FaFileUpload } from 'react-icons/fa';
import fileTypeChecker from 'file-type-checker';
import Spreadsheet from 'react-spreadsheet';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import { UserVerification } from '../../api/user/UserVerificationCollection';
import LoadingSpinner from '../components/LoadingSpinner';
import { cleanData, transformData } from '../utilities/ImportFunctions';

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

  // Data Collection
  const collectData = (sheetData) => {
    const cleanedData = cleanData(sheetData);
    console.log(cleanedData);

    const FundBalances = {
      beginningOfYear: [...cleanedData[75].slice(0, 0), ...cleanedData[75].slice(7, 10)],
      restatementAdjustment: [...cleanedData[76].slice(0, 0), ...cleanedData[76].slice(4, 7)],
      netPositionEndOfYear: [...cleanedData[77].slice(0, 0), ...cleanedData[77].slice(7, 10)],
    };
    console.log(FundBalances);

    const Expenditures = {
      management: [...cleanedData[62].slice(0, 0), ...cleanedData[62].slice(6, 9)],
      supportServices: [...cleanedData[63].slice(0, 0), ...cleanedData[63].slice(6, 9)],
      beneficiaryAdvocacy: [...cleanedData[64].slice(0, 0), ...cleanedData[64].slice(6, 9)],
      depreciation: [...cleanedData[65].slice(0, 0), ...cleanedData[65].slice(6, 9)],
      limitedLiabilityA: [...cleanedData[66].slice(0, 0), ...cleanedData[66].slice(6, 9)],
      limitedLiabilityB: [...cleanedData[67].slice(0, 0), ...cleanedData[67].slice(6, 9)],
      totalExpenses: [...cleanedData[68].slice(0, 0), ...cleanedData[68].slice(6, 9)],
      excessOfRevenue: [...cleanedData[69].slice(0, 0), ...cleanedData[69].slice(6, 9)],
      proceedsFromDebt: [...cleanedData[70].slice(0, 0), ...cleanedData[70].slice(6, 9)],
      proceedsFromCapitalLease: [...cleanedData[71].slice(0, 0), ...cleanedData[71].slice(6, 9)],
      netTransfersOtherFunds: [...cleanedData[72].slice(0, 0), ...cleanedData[72].slice(6, 9)],
      changeInNetAssets: [...cleanedData[73].slice(0, 0), ...cleanedData[73].slice(6, 9)],
    };
    console.log(Expenditures);

    const GeneralRevenues = {
      appropriations: [...cleanedData[52].slice(0, 0), ...cleanedData[52].slice(6, 9)],
      trust: [...cleanedData[53].slice(0, 0), ...cleanedData[53].slice(6, 9)],
      interestInvestmentLossesEarnings: [...cleanedData[54].slice(0, 0), ...cleanedData[54].slice(6, 9)],
      newspaperAds: [...cleanedData[55].slice(0, 0), ...cleanedData[55].slice(6, 9)],
      donationsAndOther: [...cleanedData[56].slice(0, 0), ...cleanedData[56].slice(6, 9)],
      limitedLiabilityB: [...cleanedData[57].slice(0, 0), ...cleanedData[57].slice(6, 9)],
      nonImposedFringeBenefits: [...cleanedData[58].slice(0, 0), ...cleanedData[58].slice(6, 9)],
      totalGeneralRevenue: [...cleanedData[59].slice(0, 0), ...cleanedData[59].slice(6, 9)],
      totalRevenue: [...cleanedData[60].slice(0, 0), ...cleanedData[60].slice(6, 9)],
    };
    console.log(GeneralRevenues);

    const ProgramRevenues = {
      chargesForServices: [...cleanedData[47].slice(0, 0), ...cleanedData[47].slice(6, 9)],
      operatingGrants: [...cleanedData[48].slice(0, 0), ...cleanedData[48].slice(6, 9)],
      interestInvestmentsEarnings: [...cleanedData[49].slice(0, 0), ...cleanedData[49].slice(6, 9)],
      totalProgramRevenues: [...cleanedData[50].slice(0, 0), ...cleanedData[50].slice(6, 9)],
    };
    console.log(ProgramRevenues);

    const NetAssets = {
      investedCapitalAssets: [...cleanedData[38].slice(0, 0), ...cleanedData[38].slice(6, 9)],
      restrictedFederal: [...cleanedData[39].slice(0, 0), ...cleanedData[39].slice(6, 9)],
      unrestricted: [...cleanedData[40].slice(0, 0), ...cleanedData[40].slice(6, 9)],
      totalNetAssets: [...cleanedData[41].slice(0, 0), ...cleanedData[41].slice(6, 9)],
      totalLiabilitiesNetAssets: [...cleanedData[42].slice(0, 0), ...cleanedData[42].slice(6, 9)],
    };
    console.log(NetAssets);

    const Liabilities = {
      accountPayableAccrued: [...cleanedData[28].slice(0, 0), ...cleanedData[28].slice(6, 9)],
      dueToFund: [...cleanedData[29].slice(0, 0), ...cleanedData[29].slice(6, 9)],
      dueToOther: [...cleanedData[30].slice(0, 0), ...cleanedData[30].slice(6, 9)],
      longTermWithin: [...cleanedData[31].slice(0, 0), ...cleanedData[31].slice(6, 9)],
      longTermAfter: [...cleanedData[32].slice(0, 0), ...cleanedData[32].slice(6, 9)],
      totalLiabilities: [...cleanedData[33].slice(0, 0), ...cleanedData[33].slice(6, 9)],
      deferredInflowsResources: [...cleanedData[34].slice(0, 0), ...cleanedData[34].slice(6, 9)],
      deferredInflowsOPED: [...cleanedData[35].slice(0, 0), ...cleanedData[35].slice(6, 9)],
      totalLiabilitiesDeferredInflows: [...cleanedData[36].slice(0, 0), ...cleanedData[36].slice(6, 9)],
    };
    console.log(Liabilities);

    const OtherAssets = {
      accountsReceivable: [...cleanedData[15].slice(0, 0), ...cleanedData[15].slice(6, 9)],
      dueFromOtherFund: [...cleanedData[16].slice(0, 0), ...cleanedData[16].slice(6, 9)],
      interestDividendsReceivable: [...cleanedData[17].slice(0, 0), ...cleanedData[17].slice(6, 9)],
      inventoryPrepaidOtherAssets: [...cleanedData[18].slice(0, 0), ...cleanedData[18].slice(6, 9)],
      notesWithinOneYear: [...cleanedData[19].slice(0, 0), ...cleanedData[19].slice(6, 9)],
      notesAfterOneYear: [...cleanedData[20].slice(0, 0), ...cleanedData[20].slice(6, 9)],
      securityDeposits: [...cleanedData[21].slice(0, 0), ...cleanedData[21].slice(6, 9)],
      investments: [...cleanedData[22].slice(0, 0), ...cleanedData[22].slice(6, 9)],
      capitalAssetNet: [...cleanedData[23].slice(0, 0), ...cleanedData[23].slice(6, 9)],
      totalOtherAssets: [...cleanedData[24].slice(0, 0), ...cleanedData[24].slice(6, 9)],
      deferredOutflows: [...cleanedData[25].slice(0, 0), ...cleanedData[25].slice(6, 9)],
      totalAssetsDeferred: [...cleanedData[26].slice(0, 0), ...cleanedData[26].slice(6, 9)],
    };
    console.log(OtherAssets);

    const CashAndCashEquivalents = {
      pettyCash: [...cleanedData[8].slice(0, 0), ...cleanedData[8].slice(6, 9)],
      cash: [...cleanedData[9].slice(0, 0), ...cleanedData[9].slice(6, 9)],
      cashInBank: [...cleanedData[10].slice(0, 0), ...cleanedData[10].slice(6, 9)],
      cashHeldInvestmentManager: [...cleanedData[11].slice(0, 0), ...cleanedData[11].slice(6, 9)],
      restrictedCash: [...cleanedData[12].slice(0, 0), ...cleanedData[12].slice(6, 9)],
      CashAndCashEquivalentsSum: [...cleanedData[13].slice(0, 0), ...cleanedData[13].slice(6, 9)],
    };
    console.log(CashAndCashEquivalents);

    return cleanedData;
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
        const sheetName = workbook.SheetNames[6];
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
