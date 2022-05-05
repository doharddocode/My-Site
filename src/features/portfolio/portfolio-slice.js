import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PortfolioService from "../../services/portfolio-service";

const initialState = {
  items: [],
  status: "idle",
  error: null
}

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
  },
  extraReducers(builder) {
   builder
     .addCase(fetchItems.pending, (state, action) => {
       state.status = "loading";
     })
    .addCase(fetchItems.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.items = state.items.concat(action.payload)
    })
   .addCase(fetchItems.rejected, (state, action) => {
     state.status = "failed"
     state.error = action.error.message
   });
  }
});

export const selectAllItems = ((state) => state.portfolio.items);

export const fetchItems = createAsyncThunk("portfolio/fetchItems", async () => {
  const portfolioService = new PortfolioService();

  return portfolioService.getPortfolioItems();
});

export default portfolioSlice.reducer;