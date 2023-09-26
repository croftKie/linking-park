import { configureStore } from "@reduxjs/toolkit";
import linkSlice from "./features/linkFeature";
import homeFeature from "./features/homeFeature";

export const store = configureStore({
  reducer: {
    links: linkSlice,
    home: homeFeature,
  },
});
