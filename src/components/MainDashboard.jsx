import React, { useState } from "react";
import styled from "styled-components";
import studentsIcon from "../assets/students.svg";
import teachersIcon from "../assets/teachers.svg";
import parentsIcon from "../assets/parents.svg";
import staffsIcon from "../assets/staffs.svg";
import studentStat from "../assets/students-stat.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const cardData = [
  {
    title: "Total students",
    imgUrl: studentsIcon,
    count: "3,250",
  },
  {
    title: "Total teachers",
    imgUrl: teachersIcon,
    count: "38",
  },
  {
    title: "Total parents",
    imgUrl: parentsIcon,
    count: "2,000",
  },
  {
    title: "Staffs",
    imgUrl: staffsIcon,
    count: "58",
  },
];

const footerData = [
  {
    category: "Male",
    count: 1950,
    color: "#2B2A4C",
  },
  {
    category: "Female",
    count: 1300,
    color: "#EA906C",
  },
];

const MainDashboard = () => {
  const [value, setValue] = useState(() => new Date());

  return (
    <DashboardContainer>
      <Heading>Dashboard</Heading>
      <DashboardHeadingCardContainer>
        {cardData.map(({ title, count, imgUrl }) => (
          <DashboardHeadingCard>
            <HeadingCardIconContainer>
              <HeadingCardIcon src={imgUrl} />
            </HeadingCardIconContainer>
            <HeadingCardDetailsContainer>
              <HeadingCardTitle>{title}</HeadingCardTitle>
              <HeadingCardCount>{count}</HeadingCardCount>
            </HeadingCardDetailsContainer>
          </DashboardHeadingCard>
        ))}
      </DashboardHeadingCardContainer>
      <MainSectionContainer>
        <MainSectionLayoutContainer>
          <StudentStatisticsContainer>
            <SectionHeading>Students</SectionHeading>
            <StudentStatGraphContainer>
              <StudentStatGraph src={studentStat} />
            </StudentStatGraphContainer>
            <StudentStatFooter>
              {footerData.map((data) => (
                <FooterComp {...data} />
              ))}
            </StudentStatFooter>
          </StudentStatisticsContainer>
          <EventCalenderContainer>
            <SectionHeading>Event Calender</SectionHeading>
            <Calendar value={value} onChange={setValue} />
          </EventCalenderContainer>
        </MainSectionLayoutContainer>
      </MainSectionContainer>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  grid-column: 2/-1;
  grid-row: 1 / -1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  //   background: red;
  height: 100%;
  overflow: hidden;
`;

const Heading = styled.h1``;

const DashboardHeadingCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 100px;
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const DashboardHeadingCard = styled.div`
  //   border-radius: 0.8rem;
  background: var(--semi-white);
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  align-items: center;
  transition: 0.4s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const HeadingCardIconContainer = styled.div``;
const HeadingCardIcon = styled.img``;
const HeadingCardDetailsContainer = styled.div``;
const HeadingCardTitle = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
`;
const HeadingCardCount = styled.p`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  text-align: right;
`;

const MainSectionContainer = styled.div`
  flex: 1;
  overflow: hidden;
`;

const MainSectionLayoutContainer = styled.div`
  height: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
`;

const StudentStatisticsContainer = styled.div`
  background: var(--semi-white);
  display: grid;
  grid-template-rows: 70px 1fr 100px;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  padding: 1rem;
  height: 100%;
  overflow: hidden;
  grid-row: 1 / -1;
  grid-column: 1/ 2;
`;

const EventCalenderContainer = styled.div`
  background: var(--semi-white);
  padding: 1rem;
`;

const SectionHeading = styled.h2`
  grid-column: 1 / -1;

  grid-row: 1 / 2;
`;

const StudentStatGraphContainer = styled.div`
  grid-column: 2 / 5;
  grid-row: 2/ 3;
  //   background: red;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const StudentStatGraph = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StudentStatFooter = styled.footer`
  grid-column: 1/-1;
  grid-row: 3 /-1;
  //   background: red;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  place-items: center;
`;

const FooterComp = ({ count, category, color }) => {
  return (
    <FooterCompContainer>
      <Bar style={{ backgroundColor: color }} />
      <Category>{category} students</Category>
      <Count>{count}</Count>
    </FooterCompContainer>
  );
};

const FooterCompContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
const Bar = styled.div`
  width: 60px;
  height: 10px;
  border-radius: 1rem;
`;
const Category = styled(HeadingCardTitle)``;
const Count = styled(HeadingCardCount)`
  margin: 0;
  text-align: left;
`;

export default MainDashboard;
