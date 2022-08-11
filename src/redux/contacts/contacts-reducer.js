import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const contacts = createReducer([{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }], {
  [actions.addContact]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? alert(`${payload.name} is already in contacts`)
      : [...state, payload],

  [actions.deleteContact]: (state, { payload }) => [...state.filter(({ id }) => id !== payload)],
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter });
