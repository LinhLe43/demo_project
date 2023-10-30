import { Card, Typography } from "@mui/material";
import React from "react";
import { TableHeaderProps } from "../Table/types";
import { StudentItem } from "../../types/StudentItem";
import { useSelector } from "react-redux";
import { studentSelector } from "./slice/selector";
import Table from "../Table";

function StudentList() {
  const students = useSelector(studentSelector);
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
      items={students?.studentItem}
      />
      
    </Card>
  );
}

export default StudentList;
