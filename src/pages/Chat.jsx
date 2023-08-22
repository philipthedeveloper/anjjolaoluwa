import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Heading, PageContainer, Spinner } from "../components/reusable";
import chat from "../constants/chat-data.json";
import avatar from "../assets/avatar.png";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Chat = () => {
  const [message, setMessage] = useState("");
  const location = useLocation();
  const [chatId, setChatId] = useState(
    () => location.pathname.split("/").reverse()[0].trim() || ""
  );
  const [to, setTo] = useState("");
  const { pending, error, data } = useFetch(`${BASE_URL}/chat/${chatId}`);
  const { user } = useUserContext();
  const [messages, setMessages] = useState([]);

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const newMessage = {
      chatId,
      to,
      content: message,
    };
    postMessage(newMessage);
  };

  const postMessage = async (newMessage) => {
    setMessage("");
    try {
      let response = await axios.post(`${BASE_URL}/chat`, newMessage, {
        withCredentials: true,
      });
      if ([200, 201].includes(response.status)) {
        setMessages(response.data.chat.messages);
        setChatId(response?.data?.chat._id);
        if (data?.chat?.createadBy === user.userId) {
          setTo(response?.data?.chat.conversationWith);
        } else {
          setTo(response?.data?.chat.createdBy);
        }
      } else {
        return toast.info(response?.data?.message || "An error occured");
      }
    } catch (error) {
      return toast.info(error?.response?.data?.message || "An error occured");
    }
  };

  useEffect(() => {
    if (data) {
      setMessages(data?.chat.messages);
      setChatId(data?.chat._id);
      if (data?.chat?.createadBy === user.userId) {
        setTo(data?.chat.conversationWith);
      } else {
        setTo(data?.chat.createdBy);
      }
    }
  }, [data, pending]);

  return (
    <PageContainer style={{ padding: 0 }}>
      {/* <Heading>Chat</Heading> */}
      {pending ? (
        <Spinner size="EXTRA-SMALL" />
      ) : (
        <>
          <ChatHeader>
            <ReceiverProfileImageContainer>
              <ReceiverProfileImage src={avatar} />
            </ReceiverProfileImageContainer>
            <ReceiverDetails>
              <ReceiversName>
                {user.name === data?.chat.senderName
                  ? data?.chat.recipientName
                  : data?.chat.senderName}
              </ReceiversName>
              <AccountType>
                {user.name === data?.chat.senderName
                  ? data?.chat.recipientAccountType
                  : data?.chat.senderAccountType}
              </AccountType>
            </ReceiverDetails>
          </ChatHeader>
          <ChatsContainer>
            {messages.map((message) => {
              if (message.from === user?.userId) {
                return (
                  <SentMessage key={Object.values(message).join(",")}>
                    <MessageContent>{message.content}</MessageContent>
                    <TimeStamp>
                      {new Date(message.createdAt).toUTCString()}
                    </TimeStamp>
                  </SentMessage>
                );
              } else {
                return (
                  <ReceivedMessage key={Object.values(message).join(",")}>
                    <MessageContent>{message.content}</MessageContent>
                    <TimeStamp>
                      {new Date(message.createdAt).toUTCString()}
                    </TimeStamp>
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
            <SendButton onClick={(e) => sendMessage(e)}>
              <i className="fi fi-sr-paper-plane"></i>
            </SendButton>
          </Footer>
        </>
      )}
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
  margin: 0 0 1rem 0;
  background: var(--white);
  padding: 1rem;
`;
const ReceiverProfileImageContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--background-white);
`;
const ReceiverProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const ReceiverDetails = styled.div``;
const ReceiversName = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
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
  padding: 1rem;
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
  font-size: 0.6rem;
  color: #000;
  font-weight: 600;
  margin-top: 0.5rem;
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
