import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pushTitle: null,
  pushText: null,
  pushTime: null,
  isActionSuccess: true,
  isNotifyVisible: false
}

export const pushNotificationSlice = createSlice({
  name: "pushNotification",
  initialState,
  reducers: {
    sendNotification: (state, action) => {
      state.pushTitle = action.payload.pushTitle;
      state.pushText = action.payload.pushText;
      state.pushTime = action.payload.pushTime / 60000;
      state.isActionSuccess = action.payload.isActionSuccess;
      state.isNotifyVisible = true;
    },
    closeNotification: (state) => {
       state.isNotifyVisible = false;
    }
  }
});

export const {
  sendNotification,
  closeNotification
} = pushNotificationSlice.actions;

export default pushNotificationSlice.reducer