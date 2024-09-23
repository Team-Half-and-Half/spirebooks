import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

/** Renders a single row in the List Stuff (Admin) table. See pages/ListStuffAdmin.jsx. */
const StuffItemAdmin = ({ stuff }) => {
  const { year, CashAndCashEquivalents } = stuff;
  const { pettyCash, cash, cashInBank, CashAndCashEquivalentsSum } = CashAndCashEquivalents;
  return (
    <Table>
      <tr>
        Year {year}
      </tr>
      <tr>
        {pettyCash}
      </tr>
      <tr>
        {cash}
      </tr>
      <tr>
        {cashInBank}
      </tr>
      <tr>
        {CashAndCashEquivalentsSum}
      </tr>
    </Table>
  );
};

// Require a document to be passed to this component.
StuffItemAdmin.propTypes = {
  stuff: PropTypes.shape({
    year: PropTypes.number.isRequired,
    CashAndCashEquivalents: PropTypes.shape({
      pettyCash: PropTypes.number,
      cash: PropTypes.number,
      cashInBank: PropTypes.number,
      CashAndCashEquivalentsSum: PropTypes.number,
    }),
  }).isRequired,
};
export default StuffItemAdmin;
