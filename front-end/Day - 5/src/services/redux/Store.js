import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from './UserSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);


const store = configureStore({
  reducer: {
    user: persistedUserReducer,
   
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST']
    }
  })
});

const persistor = persistStore(store);

export { store, persistor };
