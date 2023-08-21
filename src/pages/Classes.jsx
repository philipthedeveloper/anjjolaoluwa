import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Heading, PageContainer } from "../components/reusable";
import attendance_list from "../constants/attendance-list.json";
import students_list from "../constants/student-list.json";

const Classes = () => {
  const [classes, setClasses] = useState({
    "JSS 1": [],
    "JSS 2": [],
    "JSS 3": [],
    "SSS 1": [],
    "SSS 2": [],
  });
  const [maximum, setMaximum] = useState({ count: 0, class: "" });
  const [Render, setRender] = useState(() => [
    <ClassesTableColumnLayout></ClassesTableColumnLayout>,
  ]);

  useEffect(() => {
    setClasses((prev) => {
      let clone = { ...prev };
      let count = 0;
      students_list.forEach((student) => {
        clone[student.grade].push({ name: student.studentName });
      });
      let Keys = Object.keys(clone);
      Keys.forEach((key) => {
        let len = clone[key].length;
        if (len > maximum.count) {
          setMaximum((prev) => ({ count: len, class: key }));
        }
      });
      return clone;
    });
  }, []);

  useEffect(() => {
    if (maximum.count !== 0) {
      let limit = maximum.count;
      let classKeys = Object.keys(classes);
      let LocalRender = [];
      for (let i = 0; i < limit; i++) {
        let newColumnLayout = (
          <ClassesTableColumnLayout key={Math.random().toString()}>
            {classKeys.map((key) => (
              <TableData>{classes[key][i]?.name}</TableData>
            ))}
          </ClassesTableColumnLayout>
        );
        LocalRender.push(newColumnLayout);
      }
      setRender(LocalRender);
    }
  }, [maximum?.count]);

  return (
    <PageContainer>
      <Heading>Classes</Heading>
      <ClassesTableContainer>
        <ClassesTableLayout>
          <ClassesTableColumnLayout style={{ position: "sticky", top: 0 }}>
            <TableHeading>JSS 1</TableHeading>
            <TableHeading>JSS 2</TableHeading>
            <TableHeading>JSS 3</TableHeading>
            <TableHeading>SSS 1</TableHeading>
            <TableHeading>SSS 2</TableHeading>
          </ClassesTableColumnLayout>
          {Render}
          {/* {attendance_list.map(
            ({ date, subject, totalPresent, totalAbsent }) => (
              <ClassesTableColumnLayout>
                <TableData>{date}</TableData>
                <TableData>{subject}</TableData>
                <TableData>{totalPresent}</TableData>
                <TableData>{totalAbsent}</TableData>
              </ClassesTableColumnLayout>
            )
          )} */}
        </ClassesTableLayout>
      </ClassesTableContainer>
    </PageContainer>
  );
};

const ClassesTableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 1rem;
  border: 2px solid var(--semi-white);
`;

const ClassesTableLayout = styled.div`
  display: grid;
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ClassesTableColumnLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
  text-transform: capitalize;
  font-size: 0.85rem;

  &:first-child {
    text-align: left;
  }

  &:not(:last-child) {
    border-right: 2px solid var(--semi-white);
  }
`;
export default Classes;
