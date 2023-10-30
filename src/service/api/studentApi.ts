import { createServiceNoToken } from "./axios";

const instance = createServiceNoToken("https://testapi.io/api/linhld4395");

export const apiGetStudents = async (): Promise<any> => {
  const response = await instance.get("students");
  return response.data.data;
};
