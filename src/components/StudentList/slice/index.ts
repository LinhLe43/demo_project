import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StudentState } from "./type";
import { StudentItem } from "../../../types/StudentItem";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { studentSaga } from "./saga";

export const initialState: StudentState = {
  studentItem: [],
};

const slice = createSlice({
  name: "studentList",
  initialState,
  reducers: {
    getStudents: {
      reducer(state) {
        return state;
      },
      prepare(params?: null, meta?: (error: any) => void) {
        return { payload: params, meta };
      },
    },
    getStudentSuccess(state, action: PayloadAction<StudentItem[]>) {
      state.studentItem = action.payload;
    },
  },
});

export const { actions: studentAction } = slice;

export const UseStudentSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: studentSaga });
  return { actions: slice.actions };
};
