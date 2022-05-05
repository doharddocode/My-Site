import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    label: "Обо мне",
    path: "/",
  },
  {
    label: "Портфолио",
    path: "/works",
  },
  {
    label: "Контакты",
    path: "/contacts",
  },
];

export const mainNavSlice = createSlice({
  name: "mainNav",
  initialState,
  reducers: {},
});

export const selectMainNavItems = ((state) => state.mainNav);

export default mainNavSlice.reducer;