import styled, { keyframes } from "styled-components";
import Header from "../../components/Header";
import { demo1Image } from "../../global/constants/urlPath";
import { demo2Image } from "../../global/constants/urlPath";
import { demo3Image } from "../../global/constants/urlPath";
import { demo4Image } from "../../global/constants/urlPath";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [top, setTop] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      scroll();
    };
  }, []);

  function scroll() {
    if (
      document.body.scrollTop > 2500 ||
      document.documentElement.scrollTop > 2500
    ) {
      setTop(true);
    } else {
      setTop(false);
    }
  }

  function backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }
  return (
    <>
      {top ? <GoTop onClick={backToTop}>TOP</GoTop> : ""}
      <Header />
      <Main>
        <Section primary>
          <Content primary>
            <Title primary>Delightful Space for Your Yoga Practice</Title>
            <SubTitle primary>
              with easier tool to design sequences and practice
            </SubTitle>
            <Button onClick={() => navigate("/flow")}>QUICK START</Button>
            <Box1>
              <Demo primary src={demo1Image}></Demo>
            </Box1>
          </Content>
        </Section>
        <Section second>
          <Content second>
            <Title second>Arrange Sequences from Over 20 Positions</Title>
            <SubTitle>
              Simply add or remove any positions to design a desirable practice
              list of your own.
            </SubTitle>
            <Box2>
              <Demo second src={demo2Image}></Demo>
            </Box2>
          </Content>
        </Section>
        <Section last>
          <Content last>
            <Title last>Visual and Auditory Guidance</Title>
            <SubTitle>
              Support voice guide in English and Mandarin & different mat colors
              to choose from.
            </SubTitle>
            <Box3>
              <Demo src={demo3Image}></Demo>
            </Box3>
          </Content>
        </Section>
        <Section second>
          <Content second>
            <Title second>Create List for Your Favorite Practices</Title>
            <SubTitle>
              Upon logging, you can save your practice and start any practice
              immediately.
            </SubTitle>
            <Box2>
              <Demo second src={demo4Image}></Demo>
            </Box2>
          </Content>
        </Section>
      </Main>
      <Footer>
        <Copyright>Copyright © 2022 C.Liao. All rights reserved.</Copyright>
      </Footer>
    </>
  );
};

export default HomePage;

// styled components
const Main = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #e9e9e9;
`;

const Section = styled.div`
  position: relative;
  height: 100vh;
  background: ${(props) =>
    props.primary
      ? "linear-gradient(135deg, #c59c96, #d7b0a9, #edd3cb, #FAEBE8)"
      : props.last
      ? "#FFF"
      : "#none"};
  position: relative;
  color: #fff;
  @media (max-width: 768px) {
    padding: 0px 22px;
  } ;
`;
const Content = styled.div`
  width: 1344px;
  margin: 0 auto;
  overflow-x: hidden;
  text-align: ${(props) => (props.last ? "right" : "left")};
  padding: 78px 0px 0px 0px;
  @media (max-width: 1440px) {
    width: 100%;
    padding: 78px 48px 0px 48px;
  }
  @media (max-width: 1024px) {
    padding: 78px 24px 0px 24px;
  }
  @media (max-width: 768px) {
    padding: 62px 10px 0px 10px;
  } ;
`;

const rightIn = keyframes`
    0% {
        opacity: 0.8;
        left: 50%;
    }

    100% {
        opacity: 1;
        left: 45%;
    }

`;
const leftIn = keyframes`
    0% {
        opacity: 0.8;
        right: 50%;
    }

    100% {
        opacity: 1;
        right: 45%;
    }
`;
const Box1 = styled.div`
  position: absolute;
  left: 50%;
  animation-name: ${rightIn};
  animation-duration: 4s;
  animation-fill-mode: forwards;
  margin-top: 32px;
  @media (max-width: 1440px) {
    margin-top: -48px;
  }
  @media (max-width: 1280px) {
    margin-top: 16px;
  }
  @media (max-width: 768px) {
    bottom: 5%;
  }
  @media (max-width: 600px) {
    bottom: auto;
    margin-top: 40px;
    transform: translateX(-40%);
  } ;
`;
const Box2 = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5%;
  @media (max-width: 768px) {
    bottom: 10%;
  }
  @media (max-width: 600px) {
    margin-top: 40px;
    bottom: auto;
  }
`;
const Box3 = styled.div`
  position: absolute;
  animation-name: ${leftIn};
  animation-duration: 4s;
  animation-fill-mode: forwards;
  margin-top: 3%;
  @media (max-width: 768px) {
    bottom: 10%;
  }
  @media (max-width: 600px) {
    margin-top: 40px;
    right: 50%;
    transform: translateX(40%);
    bottom: auto;
  }
`;
const Demo = styled.img`
  width: ${(props) => (props.second ? "50vw" : "65vw")};
  min-width: 350px;
  max-width: 1000px;
  border-radius: 8px;
  box-shadow: ${(prop) =>
    prop.primary
      ? "-40px 48px 48px rgb(85 78 78 / 32%)"
      : "48px 40px 48px rgb(85 78 78 / 32%)"};
  @media (max-width: 1400px) {
    width: ${(props) => (props.second ? "800px" : "936px")};
  }
  @media (max-width: 1280px) {
    width: 880px;
  }
  @media (max-width: 1024px) {
    width: ${(props) => (props.second ? "740px" : "800px")};
  }
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: ${(prop) => (prop.primary ? "#FFF" : "#333")};
  padding-top: ${(prop) => (prop.last ? "5%" : "10%")};
  margin-top: ${(prop) => (prop.primary ? "5%" : "0%")};
  line-height: 40px;
  @media (max-width: 1440px) {
    margin-top: ${(prop) => (prop.second ? "3%" : "0%")};
    padding-top: ${(prop) => (prop.primary ? "8%" : "3%")};
  }
  @media (max-width: 1024px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    margin-top: 0%;
    padding-top: ${(prop) => (prop.primary ? "15%" : "3%")};
    font-size: 24px;
    line-height: 32px;
  }
`;

const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: ${(prop) => (prop.primary ? "#FFF" : "#adadad")};
  margin-top: 24px;
  line-height: 40px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-top: 16px;
  }
`;

const Button = styled.button`
  width: fit-content;
  padding: 16px 24px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  background-color: #dec8b8;
  border-radius: 8px;
  margin-top: 40px;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background: #e6d5c9;
  }
  &:active {
    background: #dec8b8;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 24px;
    padding: 8px 16px;
  }
`;
const Footer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
`;
const Copyright = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #adadad;
  letter-spacing: 0.5px;
  margin: 0 auto;
`;
const GoTop = styled.button`
  width: 56px;
  height: 56px;
  position: fixed;
  bottom: 120px;
  right: 48px;
  z-index: 5;
  background-color: #d7b0a9;
  color: #fff;
  font-size: 16px;
  border-radius: 50%;
  &:hover {
    background: #dec8b8;
  }
`;
