import { apiGetStudents } from "../../../service/api/studentApi";
import { StudentItem } from "../../../types/StudentItem";
import { call, put, takeEvery } from "redux-saga/effects";
import { studentAction as actions } from ".";
import { ApiFormatData } from "./type";

function* getStudentData() {
  try {
    const response: ApiFormatData<StudentItem> = yield call(apiGetStudents);
    console.log('response: ', response);
    
    yield put(actions.getStudentSuccess(response));
  } catch (error: any) {}
}

export function* studentSaga() {
  yield takeEvery(actions.getStudents.type, getStudentData);
}
