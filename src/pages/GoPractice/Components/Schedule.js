import styled from "styled-components";

const Schedule = ({ slide, duration }) => {
  return (
    <Container>
      <Title>Your practice</Title>
      <SubTitle>Position</SubTitle>
      <Box>
        <Pose primary>{slide.engName}</Pose>
        <Pose>{slide.chiName}</Pose>
      </Box>
      <SubTitle>Duration</SubTitle>
      <Box>
        <Number>{duration}</Number>
      </Box>
    </Container>
  );
};

export default Schedule;

// styled components

const Container = styled.div`
  width: 30%;
  height: 100%;
  padding: 16px 24px;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  @media (max-width: 1280px) {
    width: 40%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 32px;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 16px;
  }
`;
const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  padding-top: 8px;
  padding-bottom: 24px;
  letter-spacing: 1.5px;
  color: #c4c4c4;
  @media (max-width: 768px) {
    padding-bottom: 16px;
  }
`;
const SubTitle = styled(Title)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #999999;
  @media (max-width: 1440px) {
    padding-bottom: 16px;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: auto;
  padding-bottom: 32px;
`;

const Pose = styled.h2`
  font-weight: ${(prop) => (prop.primary ? "500" : "400")};
  font-size: ${(prop) => (prop.primary ? "24px" : "22px")};
  color: ${(prop) => (prop.primary ? "#333333" : "#c4c4c4")};
  letter-spacing: ${(prop) => (prop.primary ? "1px" : "2.5px")};
  margin-bottom: ${(prop) => (prop.primary ? "16px" : "0px")};
`;

const Number = styled.div`
  font-size: 48px;
`;
