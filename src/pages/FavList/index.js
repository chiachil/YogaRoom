import styled from "styled-components";
import Header from "../../components/Header";
import { useEffect, useState, useContext } from "react";
import Option from "./components/Option";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { LoginContext } from "../../context/userContext";
import { spinner } from "../../global/constants/urlPath";

const FavList = () => {
  const [list, setList] = useState([]);
  const { loggedIn } = useContext(LoginContext);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const getPractice = async () => {
      if (loggedIn) {
        const data = await getDocs(
          collection(db, "users", loggedIn.uid, "practices")
        );
        setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setOpen(false);
      }
    };
    getPractice();
  }, [loggedIn]);

  return (
    <>
      <Header />
      <Main>
        {open ? (
          <PopBG>
            <Spinner src={spinner}></Spinner>
          </PopBG>
        ) : (
          ""
        )}
        <Content>
          <TitleBox>
            <Title>Practice List</Title>
          </TitleBox>
          <List>
            {list.length === 0 ? (
              <Note>Haven't saved any practice yet.</Note>
            ) : (
              <>
                {list.map((item) => {
                  const { listName, listData, id, timestamp } = item;
                  return (
                    <Option
                      key={id}
                      id={id}
                      listData={listData}
                      listName={listName}
                      list={list}
                      setList={setList}
                      timestamp={timestamp}
                    ></Option>
                  );
                })}
              </>
            )}
          </List>
        </Content>
      </Main>
    </>
  );
};

export default FavList;

// styled components
const Main = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
`;

const Content = styled.div`
  width: 1344px;
  height: 100%;
  margin: 0 auto;
  padding: 78px 0px 114px 0px;
  @media (max-width: 1440px) {
    width: 100%;
    padding: 78px 48px 114px 48px;
  }
  @media (max-width: 1024px) {
    padding: 78px 24px 114px 24px;
  }
  @media (max-width: 768px) {
    padding: 62px 10px 114px 10px;
  } ;
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 2px;
  line-height: 32px;
  margin: 40px 0px;
  @media (max-width: 1024px) {
    font-size: 20px;
    margin: 24px 0px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    letter-spacing: 1px;
    margin: 16px 0px;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

const Note = styled.p`
  font-size: 20px;
  color: #333;
  font-weight: 400;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const PopBG = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  z-index: 3;
  top: 72px;
  @media (max-width: 768px) {
    top: 56px;
  }
`;
const Spinner = styled.img`
  width: 48px;
  height: 48px;
  position: absolute;
  left: 50%;
  top: 10%;
`;
