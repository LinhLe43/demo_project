import { Card, Typography } from "@mui/material";
import { useEffect } from "react";
import { TableHeaderProps } from "../Table/types";
import { StudentItem } from "../../types/StudentItem";
import { useDispatch, useSelector } from "react-redux";
import { studentListSelector } from "./slice/selector";
import Table from "../Table";
import { UseStudentSlice } from "./slice";

interface Props {}

export const StudentList = (props: Props) => {
  const { actions: studentActions } = UseStudentSlice();
  const dispatch = useDispatch();
  const students = useSelector(studentListSelector);
  const headers: TableHeaderProps[] = [
    {
      id: "code",
      label: "Mã sinh viên",
      hasSort: false,
    },
    {
      id: "name",
      label: "Tên sinh viên",
      hasSort: false,
    },
  ];

  useEffect(() => {
    dispatch(studentActions.getStudents());
  }, []);

  const renderItem = (item: StudentItem) => {
    return [
      <Typography>{item.code}</Typography>,
      <Typography>{item.fullName}</Typography>,
    ];
  };

  return (
    <Card
      sx={{
        p: "20px",
      }}
    >
      <Table
        headers={headers}
        renderItem={renderItem}
        items={students?.content}
        totalElements={students?.totalElements}
      />
    </Card>
  );
};
