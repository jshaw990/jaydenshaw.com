import { configureStore } from '@reduxjs/toolkit' 

import contactSlice from './contactSlice'
import cookieSlice from './cookieSlice'

export const store = configureStore({
    reducer: {
        contact: contactSlice,
        cookie: cookieSlice
    }
})