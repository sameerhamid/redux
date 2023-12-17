import { createSlice } from "@reduxjs/toolkit";

export const privacySlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers: {
    toggle: (state) => {
      return !state;
    }
  }
})

export const privacyActions = privacySlice.actions