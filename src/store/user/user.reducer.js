import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
};

//replaces reducers, actions, types
export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    //action - every action that passes through the store
    //action that we create
    //creates action creator and reducer update
    setCurrentUser(state, action) {
      //looks mutable but state is not mutated
      //new object created under the hood
      state.currentUser = action.payload
    }
  }
})

//destructuring actions off of the slice
export const { setCurrentUser } = userSlice.actions;
//replaces reducer
export const userReducer = userSlice.reducer;