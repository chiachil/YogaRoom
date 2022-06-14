import styled from "styled-components";
import { smImageUrl } from "../../../global/constants/urlPath";
import { useState, useContext } from "react";
import { RiEditBoxLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase-config";
import { collection, doc, deleteDoc } from "firebase/firestore";
import { colorArr, voiceArr } from "../../../global/constants/room";
import { LoginContext, UserContext } from "../../../context/userContext";

const Option = ({ id, listData, listName, setList, timestamp }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const navigate = useNavigate();
  const roomData = {
    color: colorArr[0],
    language: voiceArr[0],
  };
  // const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const { user } = useContext(UserContext);

  async function updatePractice() {
    navigate("/setFlow", {
      state: {
        listData: listData,
        roomData: roomData,
        listName: listName,
        practiceId: id,
      },
    });
  }

  async function deletePractice() {
    const practiceDoc = doc(db, "users", user, "practices", id);
    await deleteDoc(practiceDoc);
    setList((prev) => {
      return prev.filter((practice) => practice.id !== id);
    });
  }

  function goPractice() {
    const isEnter = true;
    navigate("/goPractice", {
      state: {
        listData: listData,
        roomData: roomData,
        listName: listName,
        isEnter: isEnter,
      },
    });
  }
  return (
    <Card>
      <Setting onClick={() => setOpenSetting(!openSetting)}>⋮</Setting>
      {openSetting ? (
        <>
          <Popup>
            <Select first>
              <SelectBtn onClick={updatePractice}>
                <EditIcon />
                Edit
              </SelectBtn>
            </Select>
            <Select>
              <SelectBtn onClick={deletePractice}>
                <DeleteIcon />
                Delete
              </SelectBtn>
            </Select>
          </Popup>
          <PopBG onClick={() => setOpenSetting(!openSetting)}></PopBG>
        </>
      ) : (
        ""
      )}
      <Practice>
        <Image src={smImageUrl + "EasyPose.svg"}></Image>
        <NameBox>
          <Name>{listName}</Name>
          <Date>{timestamp}</Date>
        </NameBox>
      </Practice>
      <Button onClick={goPractice}>Enter</Button>
    </Card>
  );
};

export default Option;

// styled components
const Card = styled.div`
  position: relative;
  width: 48.8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 8px 16px;
  margin: 0px 16px 16px 0px;
  @media (max-width: 1440px) {
    width: 47.5%;
  }
  @media (max-width: 1280px) {
    width: 100%;
    margin: 0px 0px 16px 0px;
  }
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Practice = styled.div`
  width: 80%;
  display: flex;
  justify-content: start;
  @media (max-width: 768px) {
    width: 65%;
  }
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 16px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8px;
  @media (max-width: 768px) {
    margin-right: 0px;
    width: 64px;
    height: 64px;
  }
`;
const NameBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
const Name = styled.h2`
  width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: #333333;
  letter-spacing: 1px;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 4px;
  }
`;

const Date = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #c4c4c4;
  letter-spacing: 2.5px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  width: 15%;
  height: 48px;
  font-weight: 500;
  color: #fff;
  background-color: #dec8b8;
  border-radius: 8px;
  border: 1px solid #dec8b8;
  font-size: 18px;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    background: #e6d5c9;
    border: none;
  }
  &:active {
    background: #dec8b8;
  }
  @media (max-width: 768px) {
    width: 72px;
    font-size: 16px;
  }
`;

const Setting = styled.button`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: auto;
  color: #adadad;
  font-size: 32px;
  font-weight: 500;
  @media (max-width: 768px) {
    top: 2px;
    left: 2px;
  }
`;
const PopBG = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;
  top: 0px;
  left: 0px;
`;
const Popup = styled.div`
  position: absolute;
  background: #fff;
  top: 8px;
  left: 32px;
  width: auto;
  height: auto;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 4px 8px;
  z-index: 2;
  @media (max-width: 768px) {
    top: 2px;
    left: 24px;
  }
`;
const Select = styled.div`
  padding-bottom: ${(prop) => (prop.first ? "8px" : "0px")};
  border-bottom: ${(prop) => (prop.first ? "1px solid #e9e9e9" : "")};
  margin-bottom: ${(prop) => (prop.first ? "8px" : "0px")};
`;
const SelectBtn = styled.button`
  background: #fff;
  width: 100%;
  height: auto;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  letter-spacing: 1px;

  cursor: pointer;
  &:hover {
    color: #dec8b8;
  }
  &:active {
    color: #e6d5c9;
  }
`;

const EditIcon = styled(RiEditBoxLine)`
  margin-right: 8px;
`;
const DeleteIcon = styled(RiDeleteBin6Line)`
  margin-right: 8px;
`;
