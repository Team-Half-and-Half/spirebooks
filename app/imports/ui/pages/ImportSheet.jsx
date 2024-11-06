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
  const transformData = (tData) => tData.map((row) => (
    row.map((cell) => ({ value: cell }))
  ));
  // Pad Arrays to Length (for empty data arrays)
  const padAllArraysToLength = (obj, targetLength) => {
    // Create a new object to avoid mutating the original
    const result = { ...obj };

    // Iterate over each property in the object
    Object.keys(result).forEach((key) => {
      const array = result[key];

      // Ensure the property is an array
      if (Array.isArray(array)) {
        // Slice the array to targetLength if it's longer
        result[key] = array.slice(0, targetLength);

        // Pad the array with 0s if it's shorter
        if (result[key].length < targetLength) {
          result[key] = [...result[key], ...Array(targetLength - result[key].length).fill(0)];
        }
      }
    });

    return result;
  };
  // Function to separate the data into their own object for single year
  const createArraysOfObjects = (inputObj) => {
    const maxLength = Math.max(...Object.values(inputObj).map(arr => arr.length)) - 1;
    const resultArray = [];

    for (let i = 1; i <= maxLength; i++) {
      const newObject = {};

      Object.keys(inputObj).forEach((key) => {
        const array = inputObj[key];
        if (array[i] !== undefined) {
          newObject[key] = array[i];
        } else {
          newObject[key] = null;
        }
      });
      resultArray.push(newObject);
    }

    return resultArray;
  };
  // Data Collection
  const collectData = (sheetData) => {
    // Clears empty slots caused by spaces in cells
    const innerEmptyRemoved = sheetData.map(innerArray => innerArray.filter(item => item != null && item !== ''));
    const emptyRemoved = innerEmptyRemoved.filter(innerArray => innerArray.length > 0);

    // Removes unnecessary data caused by xlsx formatting
    const unnecessaryData = ['Audited FS', 'Audited FS, Statement of Net Position', 'Audited FS, Investment Footnote', 'Audited FS, Capital Assets Footnote', 'Audited FS, Long-Term Liabilities Footnote'];
    const unnecessaryDataRemoved = emptyRemoved.map(innerArray => innerArray.filter(item => !unnecessaryData.includes(item)));
    console.log(unnecessaryDataRemoved);

    const NetPosition = {
      netOfRelatedDebt: unnecessaryDataRemoved[105],
      restrictedFederal: unnecessaryDataRemoved[106],
      unrestricted: unnecessaryDataRemoved[107],
      totalNetPosition: unnecessaryDataRemoved[108],
      totalLiabilitiesInflowsNetPosition: unnecessaryDataRemoved[109],
    };
    const NetPositionSingleYears = createArraysOfObjects(padAllArraysToLength(NetPosition, 5));
    console.log('Net Position:');
    console.log(NetPositionSingleYears);

    const LongTermLiabilitiesWithinYear = {
      accruedVacation: unnecessaryDataRemoved[70],
      workersCompensation: unnecessaryDataRemoved[71],
      accruedRetirement: unnecessaryDataRemoved[72],
      accruedLease: unnecessaryDataRemoved[73],
      capitalLease: unnecessaryDataRemoved[74],
      notesPayableA: unnecessaryDataRemoved[75],
      netPensionLiability: unnecessaryDataRemoved[76],
      netOPEDLiability: unnecessaryDataRemoved[77],
      lineOfCreditA: unnecessaryDataRemoved[79],
      lineOfCreditB: unnecessaryDataRemoved[80],
      debtService: unnecessaryDataRemoved[82],
      longTermWithinSum: unnecessaryDataRemoved[83],
    };
    const LongTermLiabilitiesWithinYearSingleYears = createArraysOfObjects(padAllArraysToLength(LongTermLiabilitiesWithinYear, 5));
    console.log('Long Term Liabilities Within Year:');
    console.log(LongTermLiabilitiesWithinYearSingleYears);

    const LongTermLiabilitiesAfterYear = {
      accruedVacation: unnecessaryDataRemoved[85],
      workersCompensation: unnecessaryDataRemoved[86],
      accruedRetirement: unnecessaryDataRemoved[87],
      accruedLease: unnecessaryDataRemoved[88],
      capitalLease: unnecessaryDataRemoved[89],
      notesPayableA: unnecessaryDataRemoved[90],
      netPensionLiability: unnecessaryDataRemoved[91],
      netOPEDLiability: unnecessaryDataRemoved[92],
      lineOfCreditA: unnecessaryDataRemoved[94],
      lineOfCreditB: unnecessaryDataRemoved[95],
      debtService: unnecessaryDataRemoved[97],
      longTermWithinSum: unnecessaryDataRemoved[98],
    };
    const LongTermLiabilitiesAfterYearSingleYears = createArraysOfObjects(padAllArraysToLength(LongTermLiabilitiesAfterYear, 5));
    console.log('Long Term Liabilities After Year:');
    console.log(LongTermLiabilitiesAfterYearSingleYears);

    const Liabilities = {
      accountPayableAccrued: unnecessaryDataRemoved[65],
      dueToFund: unnecessaryDataRemoved[66],
      dueToOther: unnecessaryDataRemoved[67],
      LongTermWithin: LongTermLiabilitiesWithinYear,
      LongTermAfter: LongTermLiabilitiesAfterYear,
      totalLiabilities: unnecessaryDataRemoved[99],
      deferredInflowsPension: unnecessaryDataRemoved[100],
      deferredInflowsOPED: unnecessaryDataRemoved[101],
      totalLiabilitiesDeferredInflows: unnecessaryDataRemoved[102],
    };
    console.log(padAllArraysToLength(Liabilities, 5));
    const LiabilitiesSingleYears = createArraysOfObjects(padAllArraysToLength(Liabilities, 5));
    console.log('Liabilities:');
    console.log(LiabilitiesSingleYears);

    const LiabilityBAsset = {
      buildings: unnecessaryDataRemoved[48],
      leaseholdImprovements: unnecessaryDataRemoved[49],
      furnitureFixturesEquipment: unnecessaryDataRemoved[50],
      vehicles: unnecessaryDataRemoved[51],
      lessAccumulatedDepreciation: unnecessaryDataRemoved[52],
      net: unnecessaryDataRemoved[53],
      land: unnecessaryDataRemoved[55],
      subTotal: unnecessaryDataRemoved[57],
    };
    const LiabilityBAssetSingleYears = createArraysOfObjects(padAllArraysToLength(LiabilityBAsset, 5));
    console.log('Liability B Asset:');
    console.log(LiabilityBAssetSingleYears);

    const Assets = {
      buildings: unnecessaryDataRemoved[35],
      leaseholdImprovements: unnecessaryDataRemoved[36],
      furnitureFixturesEquipment: unnecessaryDataRemoved[37],
      lessAccumulatedDepreciation: unnecessaryDataRemoved[38],
      net: unnecessaryDataRemoved[39],
      landA: unnecessaryDataRemoved[41],
      landB: unnecessaryDataRemoved[43],
      constructionInProgress: unnecessaryDataRemoved[45],
      subTotal: unnecessaryDataRemoved[46],
    };
    const AssetsSingleYears = createArraysOfObjects(padAllArraysToLength(Assets, 5));
    console.log('Assets:');
    console.log(AssetsSingleYears);

    const CapitalAssetsNet = {
      Assets: Assets,
      LiabilityBAsset: LiabilityBAsset,
      capitalAssetsNetSum: unnecessaryDataRemoved[39],
    };
    const CapitalAssetsNetSingleYears = createArraysOfObjects(padAllArraysToLength(CapitalAssetsNet, 5));
    console.log('Capital Assets Net:');
    console.log(CapitalAssetsNetSingleYears);

    const Investments = {
      mutualFunds: unnecessaryDataRemoved[20],
      commingledFunds: unnecessaryDataRemoved[21],
      hedgeFunds: unnecessaryDataRemoved[22],
      privateEquity: unnecessaryDataRemoved[23],
      commonTrustFund: unnecessaryDataRemoved[24],
      commonPreferredStock: unnecessaryDataRemoved[25],
      privateDebt: unnecessaryDataRemoved[26],
      other: unnecessaryDataRemoved[27],
      subTotalInvestments: unnecessaryDataRemoved[28],
      treasuriesUS: unnecessaryDataRemoved[29],
      agenciesUS: unnecessaryDataRemoved[30],
      subtotalLoanFund: unnecessaryDataRemoved[31],
    };
    const InvestmentsSingleYears = createArraysOfObjects(padAllArraysToLength(Investments, 5));
    console.log('Investments:');
    console.log(InvestmentsSingleYears);

    const OtherAssets = {
      accountsReceivable: unnecessaryDataRemoved[11],
      dueFromOtherFund: unnecessaryDataRemoved[12],
      interestDividendsReceivable: unnecessaryDataRemoved[13],
      inventoryPrepaidOtherAssets: unnecessaryDataRemoved[14],
      notesWithinOneYear: unnecessaryDataRemoved[15],
      notesAfterOneYear: unnecessaryDataRemoved[16],
      securityDeposits: unnecessaryDataRemoved[17],
      cashHeldInvestmentManager: unnecessaryDataRemoved[18],
      Investments: Investments,
      investmentSum: unnecessaryDataRemoved[28],
      CapitalAssetsNet: CapitalAssetsNet,
      restrictedCash: unnecessaryDataRemoved[59],
      totalOtherAssets: unnecessaryDataRemoved[60],
      deferredPensions: unnecessaryDataRemoved[61],
      deferredOPEB: unnecessaryDataRemoved[62],
      totalAssetsDeferred: unnecessaryDataRemoved[63],
    };
    const OtherAssetsSingleYears = createArraysOfObjects(padAllArraysToLength(OtherAssets, 5));
    console.log('Other Assets:');
    console.log(OtherAssetsSingleYears);

    const CashAndCashEquivalents = {
      pettyCash: unnecessaryDataRemoved[6],
      cash: unnecessaryDataRemoved[7],
      cashInBank: unnecessaryDataRemoved[8],
      cashAndCashEquivalentsSum: unnecessaryDataRemoved[9],
    };
    const CashAndCashEquivalentsSingleYears = createArraysOfObjects(padAllArraysToLength(CashAndCashEquivalents, 5));
    console.log('Cash And Cash Equivalents:');
    console.log(CashAndCashEquivalentsSingleYears);
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
