import { RootState } from "../../../types/rootState";

export const studentSelector = (root: RootState) => {
  return root.students;
};
