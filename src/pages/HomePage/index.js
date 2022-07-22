import styled from 'styled-components';
import Header from '../../components/Header';
import { demoImage } from '../../global/constants/urlPath';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const navigate = useNavigate();
  const [top, setTop] = useState(false);
  const Content = [
    {
      id: 1,
      title: 'Online Tools for Yoga Practice',
      subTitle: 'including Sequence Builder, Visual & Auditory Guidance and Save Feature',
      imageSrc: `${demoImage}demo1.gif`
    },
    {
      id: 2,
      title: 'Build Your Own Sequences',
      subTitle: 'Select positions and focus time to create a unique and personalized practice',
      imageSrc: `${demoImage}demo2.png`
    },
    {
      id: 3,
      title: 'Get Visual and Auditory Guidance',
      subTitle:
        'Support voice guide in English & Mandarin, and different mat colors to choose from',
      imageSrc: `${demoImage}demo3.png`
    },
    {
      id: 4,
      title: 'Save Practice to Favorites',
      subTitle: 'Upon logging, you can save your practice and start any practice immediately',
      imageSrc: `${demoImage}demo4.png`
    }
  ];

  useEffect(() => {
    window.onscroll = function () {
      scroll();
    };
  }, []);

  function scroll() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
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
      {top ? <GoTop onClick={backToTop}>TOP</GoTop> : ''}
      <Header />
      <Main>
        {Content.map((section) => {
          const { id, title, subTitle, imageSrc } = section;
          return (
            <Section key={id} id={id}>
              <Box id={id}>
                <TitleBox id={id}>
                  <Title id={id}>{title}</Title>
                  <SubTitle id={id}>{subTitle}</SubTitle>
                  {id === 1 && <Button onClick={() => navigate('/flow')}>QUICK START</Button>}
                </TitleBox>
                {id === 1 ? <Gif src={imageSrc}></Gif> : <Image id={id} src={imageSrc}></Image>}
              </Box>
            </Section>
          );
        })}
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
  width: 100%;
  position: relative;
  height: ${(prop) => (prop.id === 1 ? '100vh' : '70vh')};
  background: ${(prop) =>
    prop.id === 1
      ? 'linear-gradient(135deg, #c59c96, #d7b0a9, #edd3cb, #FAEBE8)'
      : prop.id === 3
      ? '#e9e9e9'
      : '#FFFFFF'};
  @media (max-width: 768px) {
    height: ${(prop) => (prop.id === 1 ? '100vh' : '80vh')};
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: ${(prop) => (prop.id === 1 || prop.id === 3 ? 'row' : 'row-reverse')};
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1344px;
  height: 100%;
  padding: ${(prop) => (prop.id === 1 ? '158px 0px 0px 0px' : '0px')};
  @media (max-width: 1440px) {
    width: 100%;
    padding: ${(prop) => (prop.id === 1 ? '158px 48px 0px 48px' : '0px 48px')};
  }
  @media (max-width: 1024px) {
    padding: ${(prop) => (prop.id === 1 ? '158px 24px 0px 24px' : '0px 24px')};
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${(prop) => (prop.id === 1 ? '0px 10px' : '0px 10px')};
    height: 100%;
  }
`;

const TitleBox = styled.div`
  width: 50%;
  margin-bottom: ${(prop) => (prop.id === 1 ? '48px' : '0px')};
  align-self: ${(prop) => (prop.id === 1 ? 'flex-start' : 'none')};
  @media (max-width: 768px) {
    margin-bottom: 48px;
    width: 100%;
  }
`;
const Gif = styled.img`
  max-width: 50%;
  border-radius: 8px;
  align-self: flex-end;
  box-shadow: 48px 40px 48px rgb(85 78 78 / 32%);
  margin-bottom: 10%;
  @media (max-width: 1440px) {
    margin-bottom: 5%;
  }
  @media (max-width: 768px) {
    align-self: center;
    max-width: 90%;
    margin-bottom: 0px;
  }
`;

const Image = styled.img`
  max-width: 45%;
  border-radius: 8px;
  box-shadow: ${(prop) =>
    prop.id === 4
      ? '-40px 48px 48px rgb(85 78 78 / 32%)'
      : prop.id === 3
      ? '48px 40px 48px rgb(85 78 78 / 32%)'
      : 'none'};
  margin-bottom: 0px;
  @media (max-width: 1440px) {
    margin-bottom: 0px;
  }
  @media (max-width: 768px) {
    align-self: center;
    max-width: 80%;
    margin-bottom: 0px;
  }
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: ${(prop) => (prop.id === 1 ? '#FFF' : '#333')};
  line-height: 64px;
  @media (max-width: 1024px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: ${(prop) => (prop.id === 1 ? '#FFF' : '#adadad')};
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
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 16px;
  border-radius: 50%;
  &:hover {
    background: #dec8b8;
  }
  @media (max-width: 768px) {
    bottom: 120px;
    right: 16px;
  }
`;
