import React from "react";
import { Heading, PageContainer } from "../components/reusable";
import styled from "styled-components";

const Notice = () => {
  return (
    <PageContainer>
      <Heading>Notice</Heading>
      <NoNoticeDialog />
    </PageContainer>
  );
};

const NoNoticeDialog = () => {
  return (
    <DialogContainer>
      <DialogHeading>No Notice at the moment.📪</DialogHeading>
      <DialogDesciption>Kindly check back later</DialogDesciption>
    </DialogContainer>
  );
};

const DialogContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DialogHeading = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;
const DialogDesciption = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;
export default Notice;
