import { configureStore  } from "@reduxjs/toolkit";
import firestoreReducer from '../features/firestore/firestoreSlice.js'

export const store = configureStore({
    reducer: {
        firestore: firestoreReducer,
    }
})