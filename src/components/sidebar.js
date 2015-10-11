'use strict'

import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <input type="text" ref="input" />
        <button onClick={e => this.handleClick(e)}>Add Record</button>
        <div>

        </div>
      </div>
    );
  }

  handleClick(e) {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }
}

Sidebar.propTypes = {
  onAddClick: PropTypes.func
}

export default Sidebar
