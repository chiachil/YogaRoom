import styled from "styled-components";
import { useEffect } from "react";

const Show = ({ poses, slide, setSlide }) => {
  // const {engName, chiName, imagePath} = poses;
  const { engName, chiName, imagePath } = slide;

  useEffect(() => {
    let i = 0;
    let handle = setInterval(() => {
      if (i < poses.length) {
        setSlide(poses[i]);
        i++;
      } else {
        clearInterval(handle);
      }
    }, 5000);
  });

  return (
    <>
      <Section>
        <Container primary>
          <PracticeBox>
            <Title primary>{engName}</Title>
            <Title>{chiName}</Title>
            <Image src={imagePath}></Image>
          </PracticeBox>
        </Container>
      </Section>
    </>
  );
};

export default Show;

// styled components
const Section = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: ${(props) => (props.autoHeight ? "1100px" : "100vh")};
  @media (max-width: 1440px) {
    width: 65%;
  }
  @media (max-width: 1280px) {
    width: 55%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Container = styled.div`
  padding: 140px 0px 80px 0px;
  width: 100%;
  height: calc(100% - 220px);
  @media (max-width: 768px) {
    display: ${(props) => (props.primary ? "block" : "100vh")};
  }
`;
const PracticeBox = styled.div`
  position: relative;
  width: calc(100% - 96px);
  height: 100%;
  padding: 0px 48px;
  border-bottom: 6px solid #333333;
  @media (max-width: 1280px) {
    padding: 0px 24px;
    width: calc(100% - 48px);
  }
  @media (max-width: 768px) {
    padding: 0px 10px;
    width: calc(100% - 20px);
  }
`;

const Title = styled.h1`
  font-size: ${(props) => (props.primary ? "24px" : "28px")};
  font-weight: ${(props) => (props.primary ? "500" : "300")};
  color: ${(props) => (props.primary ? "#333333" : "#c4c4c4")};
  line-height: 30px;
  letter-spacing: ${(props) => (props.primary ? "1.25px" : "1px")};
  margin-bottom: ${(props) => (props.primary ? "16px" : "40px")};
  text-align: left;
  @media (max-width: 768px) {
    font-size: ${(props) => (props.primary ? "20px" : "24px")};
  }
`;

const Image = styled.img`
  display: block;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 80%;
  border: 0px;
`;
