import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ContactState {
  filters: any;
  page: number;
}

// Define the initial state using that type
const initialState: ContactState = {
  filters: [],
  page: 1,
};

export const contactsSlice = createSlice({
  name: "contacts",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleFilters: (state: ContactState, action: PayloadAction<any>) => {
      state.filters = action.payload;
    },
    handlePage: (state: ContactState, action: PayloadAction<any>) => {
      state.page = action.payload;
    },
  },
});

export const { handleFilters, handlePage } = contactsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default contactsSlice.reducer;
