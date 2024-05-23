import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "../Features/DataSlice";
import StateSlice from "../Features/StateSlice";
export default configureStore({
  reducer: {
    data: DataSlice,
    state: StateSlice,
  },
});
