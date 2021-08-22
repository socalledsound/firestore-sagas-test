import { actionChannel } from '@redux-saga/core/effects'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items : []
}

export const firestoreSlice = createSlice({
    name: 'firestore',
    initialState,
    reducers: {
        createItem: (state, action) => {
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
            
        },
        updateItem : (state, action) => {
            
            const filteredItems = state.items.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                items: [...filteredItems, action.payload]
            }

        }
    }
})

export const { createItem, updateItem } = firestoreSlice.actions

export default firestoreSlice.reducer