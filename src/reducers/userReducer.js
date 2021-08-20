import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "visk", age: "555", status: "single" };
const userReducer = createSlice({
  name: "person",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
      console.log(action.payload);
      console.warn(state.age);
    },
    updateDetails: (state, action) => {
      return Object.assign({}, state, {
        name: action.payload.name,
        age: action.payload.age,
        status: action.payload.status,
      });
    },
  },
  extraReducers: {},
});

export const { updateName, updateAge, updateDetails } = userReducer.actions;
export default userReducer.reducer;
