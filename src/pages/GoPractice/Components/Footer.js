import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";
import { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { LoginContext } from "../../../context/userContext";
import { AiFillSound } from "react-icons/ai";

const Footer = ({
  speech,
  setSpeech,
  listData,
  setSlide,
  roomData,
  setDuration,
  started,
  setStarted,
  listName,
  practiceId,
}) => {
  const navigate = useNavigate();
  const { speak, voices, supported } = useSpeechSynthesis();
  const voiceEng = voices.find(({ lang }) => lang.match("en-ZA"));
  const voiceChi = voices.find(({ lang }) => lang.match("zh-TW"));
  const practicesCollectionRef = collection(db, "practices");
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    if (!speech.trigger) {
      return;
    }
    if (supported && roomData.language === "English") {
      speak({ text: speech.text, voice: voiceEng });
    } else if (supported && roomData.language === "中文") {
      speak({ text: speech.text, voice: voiceChi });
    }
  }, [speech]);

  function countDown() {
    let timeId = setInterval(() => {
      setDuration((prevSec) => prevSec - 1);
    }, 1000);
    return timeId;
  }

  function clickStart() {
    setStarted(!started);
    if (!supported) {
      alert(
        "Sorry, your practice will continue without voice guide since your browser doesn't support it."
      );
    }
    if (roomData.language === "English") {
      setSpeech({
        text: "The practice starts with " + listData[0].engName + ".",
        trigger: true,
      });
    } else if (roomData.language === "中文") {
      setSpeech({
        text: "從" + listData[0].chiName + "開始練習。",
        trigger: true,
      });
    }
    let timeId = countDown();
    playSlide(roomData.language, timeId);
  }

  async function Quit(isSave) {
    if (isSave) {
      // create timestamp
      const today = new Date();
      const date = `${today.getFullYear()}/${
        today.getMonth() + 1
      }/${today.getDate()}`;

      if (practiceId !== "123") {
        const practiceDoc = doc(db, "practices", practiceId);
        const newListData = {
          listName: listName,
          listData: listData,
          timestamp: date,
        };
        await updateDoc(practiceDoc, newListData);
      } else {
        // save list data to firestore
        await addDoc(practicesCollectionRef, {
          listName: listName,
          listData: listData,
          timestamp: date,
        });
      }
    }
    navigate("/setFlow", {
      state: {
        listData: [listData[0]],
        roomData: {
          color: roomData.color,
          language: roomData.language,
        },
      },
    });
  }

  function playSlide(language, timeId) {
    let total = listData[0].duration;
    for (let i = 1; i < listData.length; i++) {
      setTimeout(() => {
        if (language === "English") {
          if (i === listData.length - 1) {
            setSpeech({
              text: "Last position, " + listData[i].engName + ".",
              trigger: true,
            });
            setTimeout(() => {
              clearInterval(timeId);
              setDuration(0);
              setSpeech({
                text: "Congrats! You just finished today's practice!",
                trigger: true,
              });
            }, listData[i].duration * 1000);
          } else {
            setSpeech({
              text: "Next position, " + listData[i].engName + ".",
              trigger: true,
            });
          }
        } else if (language === "中文") {
          if (i === listData.length - 1) {
            setSpeech({
              text: "最後一個動作，" + listData[i].chiName,
              trigger: true,
            });
            setTimeout(() => {
              clearInterval(timeId);
              setDuration(0);
              setSpeech({ text: "恭喜! 您已完成今天的練習！", trigger: true });
            }, listData[i].duration * 1000);
          } else {
            setSpeech({
              text: "下一個動作， " + listData[i].chiName,
              trigger: true,
            });
          }
        }
        setSlide(listData[i]);
        setDuration(listData[i].duration);
      }, total * 1000);
      total += listData[i].duration;
    }
  }
  function clickBack() {
    navigate("/setFlow", { state: { listData: listData, roomData: roomData } });
  }

  return (
    <>
      <Container>
        <Content>
          {started ? (
            loggedIn ? (
              <>
                <Button first onClick={() => Quit(false)}>
                  Just Quit
                </Button>
                <Button primary onClick={() => Quit(true)}>
                  SAVE & QUIT
                </Button>
              </>
            ) : (
              <Button first onClick={() => Quit(false)}>
                Quit
              </Button>
            )
          ) : (
            <>
              <Button onClick={clickBack}>BACK</Button>
              <Button
                primary
                onClick={() => {
                  clickStart();
                  setStarted(true);
                }}
              >
                START<SoundIcon></SoundIcon>
              </Button>
            </>
          )}
        </Content>
      </Container>
    </>
  );
};

export default Footer;

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

const Button = styled.button`
  width: 168px;
  height: 48px;
  background-color: ${(props) => (props.primary ? "#d7b0a9" : "#FFFFFF")};
  border: ${(props) =>
    props.primary ? "0px solid #FC9874" : "2px solid #cacaca"};
  border-radius: 16px;
  box-shadow: ${(props) =>
    props.primary ? "0px 4px 0px #b39e99" : "0px 4px 0px #cacaca"};
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: ${(props) => (props.primary ? "#FFFFFF" : "#adadad")};
  letter-spacing: 1px;
  margin-right: ${(props) => (props.first ? "16px" : "0px")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.primary ? "#dec8b8" : "#e9e9e9")};
    box-shadow: ${(props) =>
      props.primary ? "0px 4px 0px #b39e99" : "0px 4px 0px #bdbdbd"};
  }
  &:active {
    transform: translateY(2px);
    box-shadow: ${(props) =>
      props.primary ? "0px 0px 0px #69403b" : "0px 0px 0px #adadad"};
  }
  @media (max-width: 768px) {
    font-size: 16px;
    width: 136px;
    height: 40px;
  }
`;

const SoundIcon = styled(AiFillSound)`
  margin-left: 8px;
  font-size: 20px;
`;
