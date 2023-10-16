
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux'; // Import combineReducers
import cartReducer from './cartRedux';
import userReducer from './userSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({ 
  cart: cartReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
