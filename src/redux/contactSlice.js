import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formIsOpen: false,
    formIsSent: false
}

export const contactSlice = createSlice({
    name: 'contactSlice',
    initialState,
    reducers: {
        toggleIsOpen: (state) => {
            state.formIsOpen = !state.formIsOpen
        },
        toggleIsSent: (state) => {
            state.formIsSent = !state.formIsSent
        },
    }
})

export const { toggleIsOpen, toggleIsSent } = contactSlice.actions 

export const contactIsOpen = state => state.contact.formIsOpen

export const contactIsSent = state => state.contact.formIsSent

export default contactSlice.reducer 