import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import { AiOutlineAlert } from 'react-icons/ai';
import { db } from '../../../firebase-config';
import { updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { UserContext } from '../../../context/userContext';

const Navigation = ({ listData, roomData, listName, practiceId }) => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (practiceId) {
      setAlert(true);
      setMessage('You are in editing mode.');
      setTimeout(() => setAlert(false), 3000);
    }
  }, [practiceId]);

  async function clickEnterRoom() {
    // data validation
    if (listData.length < 2) {
      setAlert(true);
      setMessage('At least 2 positions are required.');
      setTimeout(() => setAlert(false), 3000);
      return;
    }
    if (listData.length > 100) {
      setAlert(true);
      setMessage('Reached limit of 100 positions.');
      setTimeout(() => setAlert(false), 3000);
      return;
    }
    if (!listName) {
      const listName = 'Untitled';
      navigate('/practice', {
        state: {
          listData: listData,
          roomData: roomData,
          listName: listName,
          practiceId: practiceId
        }
      });
      return;
    }
    // change page
    navigate('/practice', {
      state: {
        listData: listData,
        roomData: roomData,
        listName: listName,
        practiceId: practiceId
      }
    });
  }
  async function clickSave() {
    setAlert(false);
    // update data to firestore
    const timestamp = serverTimestamp();
    const practiceDoc = doc(db, 'users', user, 'practices', practiceId);
    const newListData = {
      listName: listName,
      listData: listData,
      timestamp: timestamp
    };
    await updateDoc(practiceDoc, newListData);
    navigate('/practiceList');
  }

  function clickDiscard() {
    setAlert(false);
    navigate('/practiceList');
  }

  return (
    <>
      {alert ? (
        <AlertCard>
          <AlertIcon></AlertIcon>
          <AlertContent>{message}</AlertContent>
        </AlertCard>
      ) : (
        ''
      )}
      <Container>
        <Content>
          {practiceId ? (
            <>
              <EnterButton onClick={clickDiscard}>DISCARD</EnterButton>
              <EnterButton primary onClick={clickSave}>
                SAVE
              </EnterButton>
            </>
          ) : (
            <EnterButton primary onClick={clickEnterRoom}>
              ENTER ROOM
            </EnterButton>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Navigation;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background: #ffffff;
  border-top: 2px solid #e5e5e5;
  box-shadow: 0px -1px 4px #e5e5e5;
`;

const Content = styled.div`
  width: 1344px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 32px 0px;
  @media (max-width: 1440px) {
    width: 100%;
    padding: 32px 48px;
  }
  @media (max-width: 1024px) {
    padding: 24px;
  }
  @media (max-width: 768px) {
    padding: 16px 10px;
  }
`;

const EnterButton = styled.button`
  width: 158px;
  height: 48px;
  background-color: ${(props) => (props.primary ? '#d7b0a9' : '#FFFFFF')};
  border: ${(props) => (props.primary ? '0px solid #FC9874' : '2px solid #cacaca')};
  border-radius: 16px;
  box-shadow: ${(props) => (props.primary ? '0px 4px 0px #b39e99' : '0px 4px 0px #cacaca')};
  font-size: 18px;
  color: ${(props) => (props.primary ? '#FFFFFF' : '#adadad')};
  letter-spacing: 1px;
  &:hover {
    background: ${(props) => (props.primary ? '#dec8b8' : '#e9e9e9')};
    box-shadow: ${(props) => (props.primary ? '0px 4px 0px #b39e99' : '0px 4px 0px #bdbdbd')};
  }
  &:active {
    transform: translateY(2px);
    box-shadow: ${(props) => (props.primary ? '0px 0px 0px #69403b' : '0px 0px 0px #adadad')};
  }
  @media (max-width: 768px) {
    font-size: 16px;
    width: 136px;
    height: 40px;
  }
`;

const leftIn = keyframes`
    0% {
        opacity: 0.8;
        right: 24px;
    }

    100% {
        opacity: 1;
        right: 48px;
    }

`;

const AlertCard = styled.div`
  width: 320px;
  height: 72px;
  position: fixed;
  top: 96px;
  right: 24px;
  background: #fff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 8px 16px;
  display: flex;
  justify-content: start;
  align-items: center;
  animation-name: ${leftIn};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  @media (max-width: 768px) {
    width: 80%;
    top: 64px;
    right: 8px;
    animation-name: none;
    height: 48px;
  }
`;

const AlertIcon = styled(AiOutlineAlert)`
  font-size: 20px;
  margin-right: 16px;
`;

const AlertContent = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  line-height: 24px;
`;
