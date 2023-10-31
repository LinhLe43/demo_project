import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../types/RootState";

const studentList = (root: RootState) => {
  return root?.students;
};

export const studentListSelector = createSelector(
  studentList,
  (root) => {
    console.log('root: ', root?.studentItem);
    return root?.studentItem;
  }
);
