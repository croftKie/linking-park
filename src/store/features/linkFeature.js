import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  links: [],
};

const linkSlice = createSlice({
  name: "linkFeature",
  initialState,
  reducers: {
    setLinksFromDatabase: (state, action) => {
      state.links = action.payload;
    },
    addLink: (state, action) => {
      const selected = state.links.find((el) => {
        return el.name === action.payload.name;
      });
      selected.links.push(action.payload.link);
    },
  },
});

export const { setLinksFromDatabase, addLink } = linkSlice.actions;

export const linkSelector = (state) => {
  return state.links.links;
};

export default linkSlice.reducer;
