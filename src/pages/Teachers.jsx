import React from "react";
import styled from "styled-components";
import { Heading, PageContainer } from "../components/reusable";
import teachers_list from "../constants/teachers-list.json";
import { Spinner } from "../components/reusable";
import useFetch from "../hooks/useFetch";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Teachers = () => {
  const { pending, error, data } = useFetch(`${BASE_URL}/teacher`);

  return (
    <PageContainer>
      <Heading>Teachers</Heading>
      {pending ? (
        <Spinner size={"EXTRA-SMALL"} />
      ) : (
        <TeachersTableContainer>
          {!error && (
            <TeachersTableLayout>
              <TeachersTableColumnLayout style={{ position: "sticky", top: 0 }}>
                <TableHeading>Name</TableHeading>
                <TableHeading>Subject Taken</TableHeading>
                <TableHeading>Grade</TableHeading>
                <TableHeading>Years of Experience</TableHeading>
              </TeachersTableColumnLayout>
              {data.records.map(
                ({ name, subject, grade, yearsOfExperience, _id }) => (
                  <TeachersTableColumnLayout data-id={_id}>
                    <TableData>{name}</TableData>
                    <TableData>{subject}</TableData>
                    <TableData>{grade}</TableData>
                    <TableData>{yearsOfExperience}</TableData>
                  </TeachersTableColumnLayout>
                )
              )}
            </TeachersTableLayout>
          )}
        </TeachersTableContainer>
      )}
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
export default Teachers;
