import React, { useState } from "react";
import styled from "styled-components";
import { Heading, PageContainer } from "../components/resuable";
import chat from "../constants/chat-data.json";
import avatar from "../assets/avatar.png";

const Chat = () => {
  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <PageContainer>
      <Heading>Chat</Heading>
      <ChatHeader>
        <ReceiverProfileImageContainer>
          <ReceiverProfileImage src={avatar} />
        </ReceiverProfileImageContainer>
        <ReceiverDetails>
          <ReceiversName>{chat.parent}</ReceiversName>
          <AccountType>Parent Account</AccountType>
        </ReceiverDetails>
      </ChatHeader>
      <ChatsContainer>
        {chat.conversation.map((message) => {
          if (message.type === "sent") {
            return (
              <SentMessage>
                <MessageContent>{message.content}</MessageContent>
                <TimeStamp>{message.time}</TimeStamp>
              </SentMessage>
            );
          } else {
            return (
              <ReceivedMessage>
                <MessageContent>{message.content}</MessageContent>
                <TimeStamp>{message.time}</TimeStamp>
              </ReceivedMessage>
            );
          }
        })}
      </ChatsContainer>
      <Footer>
        <TextBox
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => handleMessage(e)}
          name="message"
        />
        <SendButton>
          <i className="fi fi-sr-paper-plane"></i>
        </SendButton>
      </Footer>
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
export default Chat;
