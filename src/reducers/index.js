import { combineReducers } from 'redux';
import { inspections } from './inspections';
import { searchText } from './searchText';

export const mainReducer = combineReducers({
  inspections,
  searchText
})
