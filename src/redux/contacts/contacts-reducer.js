import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const contacts = createReducer([], {
  [actions.addContact]: (state, action) => {
    const normalizedName = action.payload.name.toLowerCase();
    const checkContact = state.some(contact => contact.name.toLowerCase() === normalizedName);

    if (checkContact) {
      alert(`${action.payload.name} is already in contacts`);
      return state;
    }
    return [...state, action.payload];
  },

  [actions.deleteContact]: (state, action) => [...state.filter(({ id }) => id !== action.payload)],
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ contacts, filter });
