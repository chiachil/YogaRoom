import styled from "styled-components";
import { LordoftheFishes } from "../../../global/ImagePath";

const Demo = ({ roomData }) => {
  return (
    <Container>
      <Background src={roomData.background} alt="Room"></Background>
      <Mat color={roomData.color}></Mat>
      <Figure src={LordoftheFishes}></Figure>
    </Container>
  );
};

export default Demo;

// styled components
const Container = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  margin-right: 32px;
  @media (max-width: 1280px) {
    width: 60%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    margin-right: 0px;
    height: 400px;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`;
const Background = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 6px;
  object-fit: fill;
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
`;
const Mat = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5%;
  width: 80%;
  height: 0;
  border-bottom: 90px solid ${(props) => props.color};
  border-left: 90px solid transparent;
  border-right: 90px solid transparent;
  border-radius: 1px;
  /* box-shadow: 0px 2px 0px 0px rgba(51, 51, 51, 0.3); */
  @media (max-width: 1280px) {
    width: 95%;
  }
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 95%;
    border-bottom: 70px solid ${(props) => props.color};
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
  }
`;
const Figure = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0%;
  width: 400px;
  height: 400px;
  @media (max-width: 1024px) {
    width: 320px;
    height: 320px;
  }
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;
