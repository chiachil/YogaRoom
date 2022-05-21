import styled from "styled-components";

const Header = () => {
  const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    padding: 24px 48px;
    background: #333333;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (max-width: 1280px) {
      padding: 24px 24px;
    }
    @media (max-width: 768px) {
      padding: 24px 10px;
    }
  `;
  const Logo = styled.a`
    width: 200px;
    display: block;
    color: #ffffff;
    font-weight: 500;
    font-size: 28px;
    letter-spacing: 4px;
    @media (max-width: 768px) {
      letter-spacing: 2px;
    }
  `;
  return (
    <Container>
      <Logo>YogaRoom</Logo>
    </Container>
  );
};

export default Header;
