import { createSlice } from "@reduxjs/toolkit";
//import db from "../../Database";

const initialState = {
  assignments: [],
  assignment: { title: "New Assignment", description: "New Description", dueDate:"9/5/2022", availableFromDate: "9/5/2022", availableUntilDate:"9/5/2023"}
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [action.payload, ...state.assignments];
    },

    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, action) => {
      state.assignments = [action.payload, ...state.assignments];
        // state.assignments = [
        //   { ...action.payload, _id: new Date().getTime().toString() },
        //   ...state.assignments,
        // ];
      },
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
        );
      },
      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
      },
      setAssignment: (state, action) => {
        state.assignment = action.payload;
      },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment, setAssignments
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;