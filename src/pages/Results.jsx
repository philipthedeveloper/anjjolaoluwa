import React from "react";
import styled from "styled-components";
import { Heading, PageContainer } from "../components/reusable";
import students_list from "../constants/student-list.json";

const Results = () => {
  return (
    <PageContainer>
      <Heading>Results</Heading>
      <ResultsTableContainer>
        <ResultsTableLayout>
          <ResultsTableColumnLayout style={{ position: "sticky", top: 0 }}>
            <TableHeading>Name</TableHeading>
            <TableHeading>Classroom</TableHeading>
            <TableHeading>Grade</TableHeading>
          </ResultsTableColumnLayout>
          {students_list.map(({ studentName, grade, classroom }) => (
            <ResultsTableColumnLayout>
              <TableData>{studentName}</TableData>
              <TableData>{classroom}</TableData>
              <TableData>{grade}</TableData>
            </ResultsTableColumnLayout>
          ))}
        </ResultsTableLayout>
      </ResultsTableContainer>
    </PageContainer>
  );
};

const ResultsTableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 1rem;
  border: 2px solid var(--semi-white);
`;

const ResultsTableLayout = styled.div`
  display: grid;
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ResultsTableColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 280px 220px;

  &:not(:last-child) {
    border-bottom: 2px solid var(--semi-white);
  }
`;

const TableHeading = styled.h3`
  padding: 1rem;
  text-align: center;
  background: var(--semi-white);
  min-width: 120px;

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
  min-width: 120px;

  &:first-child {
    text-align: left;
    text-transform: capitalize;
  }

  &:not(:last-child) {
    border-right: 2px solid var(--semi-white);
  }
`;
export default Results;
