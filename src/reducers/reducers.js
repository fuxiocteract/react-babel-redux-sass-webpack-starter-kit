'use strict'

import { ADD_RECORD, UPDATE_RECORD, REMOVE_RECORD } from '../actions/actions';
import { combineReducers } from 'redux';

const initialState = {
  records: []
};

function handleRecords(state = initialState, action) {
  switch(action.type) {
    case ADD_RECORD:

      var copyState = state;
      copyState.records.push(action.record);
      return copyState;

    case UPDATE_RECORD:

      var copyState = state;
      copyState.records[action.index] = action.record;
      return copyState;

    case REMOVE_RECORD:

      var copyState = state;
      copyState.records.splice(action.index, 1);
      return copyState;

    default:
      return state;
  }
}

const reducers = combineReducers({
  handleRecords: handleRecords
});

export default reducers;
