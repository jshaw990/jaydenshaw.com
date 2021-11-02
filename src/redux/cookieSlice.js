import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    previousVisitor: false
}

export const cookieSlice = createSlice({
    name: 'cookieSlice',
    initialState,
    reducers: {
        isPreviousVisitor: (state) => {
            state.previousVisitor = !state.previousVisitor
        }
    }
})

export const { isPreviousVisitor } = cookieSlice.actions 

export const previousVisitor = state => state.cookie.previousVisitor

export default cookieSlice.reducer 