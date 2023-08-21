import React from "react";
import styled from "styled-components";
import { Heading, PageContainer } from "../components/reusable";
import attendance_list from "../constants/attendance-list.json";
import { Spinner } from "../components/reusable";
import useFetch from "../hooks/useFetch";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Attendance = () => {
  const { pending, error, data } = useFetch(`${BASE_URL}/attendance`);

  return (
    <PageContainer>
      <Heading>Attendance</Heading>
      {pending ? (
        <Spinner size={"EXTRA-SMALL"} />
      ) : (
        <AttendanceTableContainer>
          {!error && (
            <AttendanceTableLayout>
              <AttendanceTableColumnLayout
                style={{ position: "sticky", top: 0 }}
              >
                <TableHeading>Date</TableHeading>
                <TableHeading>Subject</TableHeading>
                <TableHeading>Total Present</TableHeading>
                <TableHeading>Total Absent</TableHeading>
              </AttendanceTableColumnLayout>
              {data.records.map(
                ({ date, subject, totalPresent, totalAbsent, _id }) => (
                  <AttendanceTableColumnLayout data-id={_id}>
                    <TableData>{date}</TableData>
                    <TableData>{subject}</TableData>
                    <TableData>{totalPresent}</TableData>
                    <TableData>{totalAbsent}</TableData>
                  </AttendanceTableColumnLayout>
                )
              )}
            </AttendanceTableLayout>
          )}
        </AttendanceTableContainer>
      )}
    </PageContainer>
  );
};

const AttendanceTableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 1rem;
  border: 2px solid var(--semi-white);
`;

const AttendanceTableLayout = styled.div`
  display: grid;
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const AttendanceTableColumnLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  &:not(:last-child) {
    border-bottom: 2px solid var(--semi-white);
  }
`;

const TableHeading = styled.h3`
  padding: 1rem;
  text-align: center;
  background: var(--semi-white);

  &:first-child {
    text-align: left;
  }

  &:not(:last-child) {
    border-right: 2px solid var(--background-white);
  }
`;

const TableData = styled.p`
  padding: 1rem;
  text-align: center;
  background: var(--background-white);
  text-transform: uppercase;

  &:first-child {
    text-align: left;
    text-transform: capitalize;
  }

  &:not(:last-child) {
    border-right: 2px solid var(--semi-white);
  }
`;
export default Attendance;
