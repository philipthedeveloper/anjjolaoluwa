import React, { useState } from "react";
import styled from "styled-components";
import { Heading, PageContainer, Spinner } from "../components/reusable";
import useFetch from "../hooks/useFetch";
import ChatCard from "../components/ChatCard";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AllChats = () => {
  const { pending, data, error } = useFetch(`${BASE_URL}/chat`);

  return (
    <PageContainer style={{ position: "relative" }}>
      <Heading>Chats</Heading>
      {pending ? (
        <Spinner size="EXTRA-SMALL" />
      ) : (
        <ChatCardContainer>
          {data.records.map((chat) => (
            <ChatCard
              key={Object.values(chat).join(",").slice(0, 30)}
              {...chat}
            />
          ))}
          {data.records.length === 0 && <NoChatDialog />}
        </ChatCardContainer>
      )}
      <NewChatButton>
        <i className="fi fi-sr-messages"></i>
      </NewChatButton>
    </PageContainer>
  );
};

// const LayoutContainer = styled.div`
//   margin-top: 1rem;
//   width: 100%;
//   height: 100%;
// `;

const ChatHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 1rem 0;
`;
const ReceiverProfileImageContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--semi-white);
`;
const ReceiverProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ReceiverDetails = styled.div``;
const ReceiversName = styled.p`
  font-weight: 500;
`;
const AccountType = styled.p`
  font-size: 0.8rem;
  margin-top: 0.3rem;
`;

const ChatsContainer = styled.div`
  display: flex;
  height: 100%;
  overflow: auto;
  flex-direction: column;
  padding-bottom: 150px;
`;

const ChatCardContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  height: 100%;
  overflow: auto;
  flex-direction: column;
  padding-bottom: 150px;
`;

const SentMessage = styled.div`
  align-self: flex-end;
  margin-bottom: 1rem;

  & > p:first-child {
    border-radius: 1rem;
    background-color: var(--semi-white);
    border-top-right-radius: 0rem;
    color: #000;
  }
`;

const ReceivedMessage = styled.div`
  align-self: flex-start;
  margin-bottom: 1rem;

  & > p:first-child {
    border-radius: 1rem;
    background-color: var(--primary-color);
    border-top-left-radius: 0rem;
  }
`;

const MessageContent = styled.p`
  color: var(--semi-white);
  padding: 0.7rem 1.2rem;
  max-width: 400px;
  font-size: 0.9rem;
`;

const TimeStamp = styled.p`
  font-size: 0.75rem;
  color: gray;
  font-weight: 600;
  margin-top: 0.8rem;
  text-align: right;
`;

const Footer = styled.footer`
  height: 130px;
  background: var(--semi-white);
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
  padding: 0 1rem;
`;

const TextBox = styled.input`
  background-color: var(--background-white);
  border: none;
  outline: none;
  padding: 0.7rem 1rem;
  flex: 1;
  border-radius: 50px;
`;

const SendButton = styled.button`
  border: none;
  outline: none;
  background: var(--primary-color);
  border-radius: 50%;
  min-width: 50px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  i {
    color: #fff;
    font-size: 1.5rem;
    height: 30px;
  }
`;

const NewChatButton = styled.div`
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4), 0px 0px 15px rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  background: var(--secondary-color);
  min-width: 70px;
  max-width: 70px;
  min-height: 70px;
  max-height: 70px;
  display: inline-block;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 1.5rem;
  position: fixed;
  right: 5%;
  bottom: 5%;
  cursor: pointer;

  i {
    font-size: 1.5rem;
    color: var(--white);
    heigth: 30px;
  }
`;

const NoChatDialog = () => {
  return (
    <DialogContainer>
      <DialogHeading>No Chat yet.📪</DialogHeading>
      <DialogDesciption>
        New here? Tap the message icon to start chatting.
      </DialogDesciption>
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
`;
const DialogDesciption = styled.p`
  font-size: 0.8rem;
`;
export default AllChats;
