'use strict'

import React, { Component, findDOMNode, PropTypes } from 'react';
import { connect } from 'react-redux';

import Sidebar from './sidebar'
import { addRecord } from '../actions/actions';

class App extends Component {
  render() {
    const { dispatch, records } = this.props;
    return (
      <div>
        <Sidebar onAddClick={record =>
          dispatch(addRecord(record)) }/>
        <ul>
          {
            records.map(record => <li>{record}</li>)
          }
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  records: PropTypes.array.isRequired
}

function select(state) {
  return {
    records: state.handleRecords.records
  }
}

export default connect(select)(App);
