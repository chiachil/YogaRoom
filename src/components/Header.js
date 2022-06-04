import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Logo
          onClick={() => {
            navigate("/");
          }}
        >
          YogaRoom
        </Logo>
      </Content>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  background: #ffffff;
  border-bottom: 2px solid #e5e5e5;
`;

const Content = styled.div`
  width: 1344px;
  margin: 0 auto;
  padding: 24px 0px;
  @media (max-width: 1440px) {
    width: 100%;
    margin: 0px;
    padding: 24px 48px;
  }
  @media (max-width: 1024px) {
    padding: 24px;
  }
  @media (max-width: 768px) {
    padding: 16px 10px;
  } ;
`;

const Logo = styled.a`
  width: 100%;
  display: block;
  color: #333333;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  font-size: 28px;
  letter-spacing: 4px;
  cursor: pointer;
  @media (max-width: 768px) {
    letter-spacing: 2px;
  }
`;
