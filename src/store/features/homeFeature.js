import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  features: [
    {
      header: "One thing at a time.",
      description:
        "By adding a physical process, such as moving your digital avatar between locations, you make changing tasks an active thought and hopefully it keeps you from passively moving between random websites and keeps you focused.",
    },
    {
      header: "Organise your links.",
      description:
        "Linking Park has lots of 'Points of Interest' and each one can be used to group together a set of bookmarks. For example, you can keep all your study related bookmarks in the school.",
    },
    {
      header: "Enjoy a cute, retro world",
      description:
        "Lots of productivity apps are dull, lets break that and create a fun little world for you to move around.",
    },
  ],
};

const homeSlice = createSlice({
  name: "homeFeature",
  initialState,
  reducers: {},
});

export const {} = homeSlice.actions;

export const featuresSelector = (state) => {
  return state.home.features;
};

export default homeSlice.reducer;
