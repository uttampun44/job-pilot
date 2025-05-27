import {createSlice } from "@reduxjs/toolkit";

interface DashboardState {
  totalUsersWithRoles: [];  
  favouriteJobs: [];
  appliedJobs: [];
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    totalUsersWithRoles: [],
    favouriteJobs: [],
    appliedJobs: [],
  } as DashboardState,
  
  reducers: {
    totalUsersWithRoles: (state, action) => {
      state.totalUsersWithRoles = action.payload;
    },
    favouriteJobs: (state, action) => {
      state.favouriteJobs = action.payload;
    },
    appliedJobs: (state, action) => {
      state.appliedJobs = action.payload;
    },
  },
});

export const { favouriteJobs, appliedJobs } = dashboardSlice.actions;