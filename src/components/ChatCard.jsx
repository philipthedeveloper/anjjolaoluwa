import React from "react";
import styled from "styled-components";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const ChatCard = ({
  recipientName,
  recipientAccountType,
  _id,
  senderName,
  senderAccountType,
}) => {
  const { user } = useUserContext();

  return (
    <LinkWrapper to={`/chats/${_id}`}>
      <CardContainer>
        <ImageContainer>
          <Avatar src={avatar} />
        </ImageContainer>
        <InfoContainer>
          <AccountName>
            {user.name === senderName ? recipientName : senderName}
          </AccountName>
          <AccountType>
            Account type:{" "}
            {user.name === senderName
              ? recipientAccountType
              : senderAccountType}
          </AccountType>
        </InfoContainer>
      </CardContainer>
    </LinkWrapper>
  );
};

const CardContainer = styled.div`
  cursor: pointer;
  background: var(--white);
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
`;

const LinkWrapper = styled(Link)`
  display: block;
`;

const ImageContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--background-white);
`;
const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const AccountName = styled.h4`
  font-weight: 600;
  margin-bottom: 0.7rem;
  font-size: 1.2rem;
`;
const AccountType = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0.9;
  color: #000;
`;

export default ChatCard;
