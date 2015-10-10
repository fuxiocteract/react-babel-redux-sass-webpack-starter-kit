'use strict'

export const ADD_RECORD = 'ADD_RECORD';
export const UPDATE_RECORD = 'UPDATE_RECORD';
export const REMOVE_RECORD = 'REMOVE_RECORD';

export function addRecord(record) {
  return { type: ADD_RECORD, record: record };
}

export function updateRecord(index, record) {
  return { type: UPDATE_RECORD, index: index, record: record };
}

export function removeRecord(index) {
  return { types: REMOVE_RECORD, index: index };
}
