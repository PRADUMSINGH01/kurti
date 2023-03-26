import {configureStore ,applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import  FETCH_DATA  from './slice';
import wishlist from './wishlist';
import watcher from './saga/saga';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export  const store = configureStore({
    reducer:{

        API:FETCH_DATA,
        wishlist:wishlist,

    },
    middleware,
})


sagaMiddleware.run(watcher);
