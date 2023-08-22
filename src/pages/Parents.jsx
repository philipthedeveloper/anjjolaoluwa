import React from "react";
import styled from "styled-components";
import { Heading, PageContainer } from "../components/reusable";
import { Spinner } from "../components/reusable";
import useFetch from "../hooks/useFetch";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Parents = () => {
  const { pending, error, data } = useFetch(`${BASE_URL}/parent`);

  return (
    <PageContainer>
      <Heading>Parents</Heading>
      {pending ? (
        <Spinner size={"EXTRA-SMALL"} />
      ) : (
        <ParentsTableContainer>
          {!error && (
            <ParentsTableLayout>
              <ParentsTableColumnLayout style={{ position: "sticky", top: 0 }}>
                <TableHeading>Name</TableHeading>
                <TableHeading>Email</TableHeading>
                <TableHeading>Phone Number</TableHeading>
              </ParentsTableColumnLayout>
              {data.records.map(({ name, email, phoneNumber, _id }) => (
                <ParentsTableColumnLayout data-id={_id}>
                  <TableData>{name}</TableData>
                  <TableData>{email}</TableData>
                  <TableData>{phoneNumber}</TableData>
                </ParentsTableColumnLayout>
              ))}
            </ParentsTableLayout>
          )}
        </ParentsTableContainer>
      )}
    </PageContainer>
  );
};

const ParentsTableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-top: 1rem;
  border: 2px solid var(--semi-white);
`;

const ParentsTableLayout = styled.div`
  display: grid;
  grid-template-rows: max-content;
  grid-auto-rows: max-content;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ParentsTableColumnLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  //   text-transform: uppercase;
  min-width: 120px;

  &:first-child {
    text-align: left;
    text-transform: capitalize;
  }

  &:not(:last-child) {
    border-right: 2px solid var(--semi-white);
  }
`;
export default Parents;
