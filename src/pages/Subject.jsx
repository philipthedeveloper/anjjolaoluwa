import React from "react";
import styled from "styled-components";
import { Heading, PageContainer } from "../components/reusable";
import students_list from "../constants/student-list.json";
import useFetch from "../hooks/useFetch";
import { Spinner } from "../components/reusable";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Subject = () => {
  const { pending, error, data } = useFetch(`${BASE_URL}/teacher`);
  return (
    <PageContainer>
      <Heading>Subjects</Heading>
      {pending ? (
        <Spinner size={"EXTRA-SMALL"} />
      ) : (
        <SubjectTableContainer>
          {!error && (
            <SubjectTableLayout>
              <SubjectTableColumnLayout style={{ position: "sticky", top: 0 }}>
                <TableHeading>Subject</TableHeading>
                <TableHeading>Teacher</TableHeading>
              </SubjectTableColumnLayout>
              {data.records.map(
                ({ name, subject, grade, yearsOfExperience, _id }) => (
                  <SubjectTableColumnLayout data-id={_id}>
                    <TableData>{subject}</TableData>
                    <TableData>{name}</TableData>
                  </SubjectTableColumnLayout>
                )
              )}
            </SubjectTableLayout>
          )}
        </SubjectTableContainer>
      )}
    </PageContainer>
  );
};

const SubjectTableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 1rem;
  border: 2px solid var(--semi-white);
`;

const SubjectTableLayout = styled.div`
  display: grid;
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const SubjectTableColumnLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

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
export default Subject;
