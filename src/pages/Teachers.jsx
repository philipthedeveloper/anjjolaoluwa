import React from "react";
import styled from "styled-components";
import { Heading, PageContainer } from "../components/reusable";
import teachers_list from "../constants/teachers-list.json";

const Teachers = () => {
  return (
    <PageContainer>
      <Heading>Teachers</Heading>
      <TeachersTableContainer>
        <TeachersTableLayout>
          <TeachersTableColumnLayout style={{ position: "sticky", top: 0 }}>
            <TableHeading>Name</TableHeading>
            <TableHeading>Subject Taken</TableHeading>
            <TableHeading>Grade</TableHeading>
            <TableHeading>Years of Experience</TableHeading>
          </TeachersTableColumnLayout>
          {teachers_list.map(({ name, subject, grade, yearsOfExperience }) => (
            <TeachersTableColumnLayout>
              <TableData>{name}</TableData>
              <TableData>{subject}</TableData>
              <TableData>{grade}</TableData>
              <TableData>{yearsOfExperience}</TableData>
            </TeachersTableColumnLayout>
          ))}
        </TeachersTableLayout>
      </TeachersTableContainer>
    </PageContainer>
  );
};

const TeachersTableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 1rem;
  border: 2px solid var(--semi-white);
`;

const TeachersTableLayout = styled.div`
  display: grid;
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const TeachersTableColumnLayout = styled.div`
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
export default Teachers;
