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
import {CashAndCashEquivalents} from "../../api/schemas/AuditedBalanceSchema";

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
  // Pad Arrays to Length
  const padAllArraysToLength = (obj, targetLength) => {
    Object.keys(obj).forEach(key => {
      if (obj[key] && Array.isArray(obj[key])) {
        while (obj[key].length < targetLength) {
          obj[key].push(0);
        }
      }
    });
  };
  // New Data Collection
  const collectData = (sheetData) => {
    console.log(sheetData);
    // Clears empty slots caused by spaces in cells
    const innerEmptyRemoved = sheetData.map(innerArray => innerArray.filter(item => item != null && item !== ''));
    const emptyRemoved = innerEmptyRemoved.filter(innerArray => innerArray.length > 0);

    // Removes unnecessary data caused by xlsx formatting
    const unnecessaryData = ['Audited FS', 'Audited FS, Statement of Net Position', 'Audited FS, Investment Footnote', 'Audited FS, Capital Assets Footnote', 'Audited FS, Long-Term Liabilities Footnote'];
    const unnecessaryDataRemoved = emptyRemoved.map(innerArray => innerArray.filter(item => !unnecessaryData.includes(item)));
    console.log(unnecessaryDataRemoved);

    const NetPosition = {
      netOfRelatedDebt: unnecessaryData[105],
      restrictedFederal: unnecessaryData[106],
      unrestricted: unnecessaryData[107],
      totalNetPosition: unnecessaryData[108],
      totalLiabilitiesInflowsNetPosition: unnecessaryData[109],
    };
    const LongTermLiabilitiesWithinYear = {
      accruedVacation: unnecessaryData[70],
      workersCompensation: unnecessaryData[71],
      accruedRetirement: unnecessaryData[72],
      accruedLease: unnecessaryData[73],
      capitalLease: unnecessaryData[74],
      notesPayableA: unnecessaryData[75],
      netPensionLiability: unnecessaryData[76],
      netOPEDLiability: unnecessaryData[77],
      lineOfCreditA: unnecessaryData[79],
      lineOfCreditB: unnecessaryData[80],
      debtService: unnecessaryData[82],
      longTermWithinSum: unnecessaryData[83],
    };
    const LongTermLiabilitiesAfterYear = {
      accruedVacation: unnecessaryData[85],
      workersCompensation: unnecessaryData[86],
      accruedRetirement: unnecessaryData[87],
      accruedLease: unnecessaryData[88],
      capitalLease: unnecessaryData[89],
      notesPayableA: unnecessaryData[90],
      netPensionLiability: unnecessaryData[91],
      netOPEDLiability: unnecessaryData[92],
      lineOfCreditA: unnecessaryData[94],
      lineOfCreditB: unnecessaryData[95],
      debtService: unnecessaryData[97],
      longTermWithinSum: unnecessaryData[98],
    };
    const Liabilities = {
      accountPayableAccrued: unnecessaryData[65],
      dueToFund: unnecessaryData[66],
      dueToOther: unnecessaryData[67],
      LongTermWithin: LongTermLiabilitiesWithinYear,
      LongTermAfter: LongTermLiabilitiesAfterYear,
      totalLiabilities: unnecessaryData[99],
      deferredInflowsPension: unnecessaryData[100],
      deferredInflowsOPED: unnecessaryData[101],
      totalLiabilitiesDeferredInflows: unnecessaryData[102],
    };
    const LiabilityBAsset = {
      buildings: unnecessaryData[48],
      leaseholdImprovements: unnecessaryData[49],
      furnitureFixturesEquipment: unnecessaryData[50],
      vehicles: unnecessaryData[51],
      lessAccumulatedDepreciation: unnecessaryData[52],
      net: unnecessaryData[53],
      land: unnecessaryData[55],
      subTotal: unnecessaryData[57],
    };
    const Assets = {
      buildings: unnecessaryData[35],
      leaseholdImprovements: unnecessaryData[36],
      furnitureFixturesEquipment: unnecessaryData[37],
      lessAccumulatedDepreciation: unnecessaryData[38],
      net: unnecessaryData[39],
      landA: unnecessaryData[41],
      landB: unnecessaryData[43],
      constructionInProgress: unnecessaryData[45],
      subTotal: unnecessaryData[46],
    };
    const CapitalAssetsNet = {
      Assets: Assets,
      LiabilityBAsset: LiabilityBAsset,
      capitalAssetsNetSum: unnecessaryData[39],
    };
    const Investments = {
      mutualFunds: unnecessaryData[20],
      commingledFunds: unnecessaryData[21],
      hedgeFunds: unnecessaryData[22],
      privateEquity: unnecessaryData[23],
      commonTrustFund: unnecessaryData[24],
      commonPreferredStock: unnecessaryData[25],
      privateDebt: unnecessaryData[26],
      other: unnecessaryData[27],
      subTotalInvestments: unnecessaryData[28],
      treasuriesUS: unnecessaryData[29],
      agenciesUS: unnecessaryData[30],
      subtotalLoanFund: unnecessaryData[31],
    };
    const OtherAssets = {
      accountsReceivable: unnecessaryData[11],
      dueFromOtherFund: unnecessaryData[12],
      interestDividendsReceivable: unnecessaryData[13],
      inventoryPrepaidOtherAssets: unnecessaryData[14],
      notesWithinOneYear: unnecessaryData[15],
      notesAfterOneYear: unnecessaryData[16],
      securityDeposits: unnecessaryData[17],
      cashHeldInvestmentManager: unnecessaryData[18],
      Investments: Investments,
      investmentSum: unnecessaryData[28],
      CapitalAssetsNet: CapitalAssetsNet,
      restrictedCash: unnecessaryData[59],
      totalOtherAssets: unnecessaryData[60],
      deferredPensions: unnecessaryData[61],
      deferredOPEB: unnecessaryData[62],
      totalAssetsDeferred: unnecessaryData[63],
    };
    const CashAndCashEquivalents = {
      pettyCash: unnecessaryData[6],
      cash: unnecessaryData[7],
      cashInBank: unnecessaryData[8],
      cashAndCashEquivalentsSum: unnecessaryData[9],
    };
  };

  // Old Data Collection
  // const collectData = (sheetData) => {
  //   // Clears empty slots caused by spaces in cells
  //   const innerEmptyRemoved = sheetData.map(innerArray => innerArray.filter(item => item != null && item !== ''));
  //   const emptyRemoved = innerEmptyRemoved.filter(innerArray => innerArray.length > 0);
  //
  //   // Removes unnecessary data caused by xlsx formatting
  //   const unnecessaryData = ['Audited FS', 'Audited FS, Statement of Net Position', 'Audited FS, Investment Footnote', 'Audited FS, Capital Assets Footnote', 'Audited FS, Long-Term Liabilities Footnote'];
  //   const unnecessaryDataRemoved = emptyRemoved.map(innerArray => innerArray.filter(item => !unnecessaryData.includes(item)));
  //
  //   // Collects arrays holding net position data
  //   const netPositionItems = ['Invested in capital assets, net of related debt', 'Restricted - federal funds', 'Unrestricted', 'Total net position', 'Total Liabilities, Deferred Inflows of Resources and  Net Position'];
  //   const netPositionData = {};
  //   for (const item of netPositionItems) {
  //     netPositionData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
  //   }
  //
  //   // Collects arrays holding long term liabilities data
  //   const longTermLiabilitiesItems = ['Accrued vacation', "Workers' compensation", 'Accrued management retirement plan', 'Accrued lease guaranty obligation', 'Capital lease obligation', 'Notes payable - Building A acquisition', 'Net Pension Liability', 'Net OPEB Liability', 'Line of Credit - Building A', 'Line of Credit - Building B', 'Debt Service', 'Long-term liabilities - due after one year'];
  //   const longTermLiabilitiesData = {};
  //   for (const item of longTermLiabilitiesItems) {
  //     longTermLiabilitiesData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
  //   }
  //
  //   // Collects arrays holding liabilities data
  //   const liabilitiesItems = ['Accounts payable and accrued liabilities', 'Due to fund', 'Due to other fund', 'Long-term liabilities - due within one year', 'Long-term liabilities - due after one year', 'Total Liabilities', 'Deferred inflows of resources related to pensions', 'Deferred inflows of resources related to OPEB', 'Total liabilities and deferred inflows of resources'];
  //   const liabilitiesData = {};
  //   for (const item of liabilitiesItems) {
  //     liabilitiesData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
  //   }
  //
  //   // Collects arrays holding Liabilities B Asset data (fix later)
  //   const liabilitiesBAssetItems = ['Buildings', 'Leasehold improvements', 'Furniture, fixtures and equipment', 'Vehicles', 'Less accumulated depreciation', 'Net', 'Land', "Subtotal - Limited Liability Company B's assets, net"];
  //   const liabilitiesBAssetData = {};
  //   for (const item of liabilitiesBAssetItems) {
  //     liabilitiesBAssetData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
  //   }
  //
  //   // Collects arrays holding Assets data (fix later)
  //   const assetsItems = ['Buildings', 'Leasehold improvements', 'Furniture, fixtures and equipment', 'Less accumulated depreciation', 'Net', 'Land A', 'Land B', 'Construction in Progress', 'Subtotal - Capital Assets, net'];
  //   const assetsData = {};
  //   for (const item of assetsItems) {
  //     assetsData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
  //   }
  //
  //   // Collects arrays holding Capital Assets Net data (fix later)
  //   const capitalAssetsNetItems = ['Assets', "Limited Liability Company B's Assets", 'Capital Assets, net'];
  //   const capitalAssetsNetData = {};
  //   for (const item of capitalAssetsNetItems) {
  //     capitalAssetsNetData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
  //   }
  //
  //   // Collects arrays holding Investments data
  //   const investmentsItems = ['Mutual Funds', 'Commingled funds', 'Hedge funds', 'Private equity', 'Common trust fund', 'Common & preferred stock', 'Private debt', 'Other', 'Subtotal - Investment', 'U.S. treasuries', 'U.S. agencies', 'Subtotal - Loan Fund'];
  //   const investmentsData = {};
  //   for (const item of investmentsItems) {
  //     investmentsData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
  //   }
  //
  //   // Collects arrays holding Other Assets data (fix later)
  //   const otherAssetsItems = ['Accounts receivable', 'Due from other fund', 'Interest and dividends receivable', 'Inventory, prepaid items and other assets', 'Notes receivable - due within one year', 'Notes receivable - due afer one year', 'Security Deposits', 'Cash held by investment manager', 'Investments:', 'Investments', 'Capital Assets, net', 'Total Other Assets', 'Deferred outflows of resources related to pensions', 'Deferred outflows of resources related to OPEB', 'Total assets and deferred outflows of resources'];
  //   const otherAssetsData = {};
  //   for (const item of otherAssetsItems) {
  //     otherAssetsData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
  //   }
  //
  //   // Collects arrays holding Cash and Cash Equivalents data
  //   const cashAndCashEquivalentsItems = ['Petty cash', 'Cash', 'Cash in banks/Draw on Line of Credit', 'Total Cash and Cash Equivalents'];
  //   const cashAndCashEquivalentsData = {};
  //   for (const item of cashAndCashEquivalentsItems) {
  //     cashAndCashEquivalentsData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
  //   }
  //
  //   // Collects arrays holding year data
  //   const columnDataItems = ['Fiscal Year'];
  //   const columnDataData = {};
  //   for (const item of columnDataItems) {
  //     columnDataData[item] = unnecessaryDataRemoved.find(innerArray => innerArray.includes(item)) || null;
  //   }
  //
  //   console.log(unnecessaryDataRemoved);
  // };

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
