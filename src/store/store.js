import { configureStore } from "@reduxjs/toolkit";
import linkSlice from "./features/linkFeature";

export const store = configureStore({
  reducer: {
    links: linkSlice,
  },
});
