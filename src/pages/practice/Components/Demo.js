import styled from 'styled-components';
import Preference from './Preference';
import { lgImageUrl } from '../../../global/constants/urlPath';
import { roomImage } from '../../../global/constants/urlPath';
import React from 'react';

const Demo = ({ slide, roomData, updateRoom, setSpeech, started }) => {
  return (
    <Container>
      <Background src={roomImage} alt="Room"></Background>
      <Mat color={roomData.color}></Mat>
      <Figure src={lgImageUrl + slide.imagePath}></Figure>
      {started ? (
        <></>
      ) : (
        <Preference roomData={roomData} updateRoom={updateRoom} setSpeech={setSpeech}></Preference>
      )}
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
    height: 300px;
  }
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 6px;
  object-fit: fill;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const Mat = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5%;
  width: 80%;
  height: 0;
  border-bottom: 90px solid ${(prop) => prop.color};
  border-left: 90px solid transparent;
  border-right: 90px solid transparent;
  border-radius: 1px;
  @media (max-width: 1280px) {
    width: 95%;
  }
  @media (max-width: 1024px) {
    width: 80%;
    border-bottom: 72px solid ${(prop) => prop.color};
    border-left: 72px solid transparent;
    border-right: 72px solid transparent;
  }
  @media (max-width: 768px) {
    width: 95%;
    border-bottom: 56px solid ${(prop) => prop.color};
    border-left: 56px solid transparent;
    border-right: 56px solid transparent;
  }
`;

const Figure = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 7%;
  width: 80%;
  height: 80%;
  @media (max-width: 1024px) {
    width: 320px;
    height: 320px;
  }
  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
`;
