import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../types/RootState";

const studentList = (root: RootState) => {
  return root.students;
};

export const studentListSelector = createSelector(
  studentList,
  (root) => root?.studentItem
);
