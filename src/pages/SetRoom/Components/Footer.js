import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Footer = ({ listData, roomData }) => {
  const navigate = useNavigate();

  function clickNext() {
    navigate("/goPractice", {
      state: { listData: listData, roomData: roomData },
    });
  }

  function clickBack() {
    navigate("/", { state: { listData: listData, roomData: roomData } });
  }

  return (
    <Container>
      <Content>
        <Button onClick={clickBack}>BACK</Button>
        <Button primary onClick={clickNext}>
          NEXT
        </Button>
      </Content>
    </Container>
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
    padding: 24px 10px;
  }
`;

const Button = styled.button`
  width: 152px;
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
`;
