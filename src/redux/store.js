// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import logger from 'redux-logger';
// import contactsReducer from './contacts/contacts-reducer';

// const contactsReducerPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const contactsPersistReducer = persistReducer(contactsReducerPersistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     contact: contactsPersistReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   logger,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);

// ====
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import contactsReducer from './contacts/contacts-reducer';
import logger from 'redux-logger';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: { contacts: persistReducer(persistConfig, contactsReducer) },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);
// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
