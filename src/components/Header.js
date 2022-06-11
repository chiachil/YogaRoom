import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { domain } from "../global/constants/urlPath";
import SignIn from "./Popup/SignIn";
import SignUp from "./Popup/SignUp";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const Header = () => {
  const navigate = useNavigate();
  const [small, setSmall] = useState(true);
  const [open, setOpen] = useState(false);
  const [signup, setSignup] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    if ((typeof window !== "undefined") & (window.location == domain)) {
      setSmall(false);
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 140)
      );
    }
  }, []);

  useEffect(() => {
    if (user) {
      setOpen(false);
    }
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [user]);

  const logout = async () => {
    await signOut(auth);
    console.log(user);
  };

  return (
    <>
      <Container small={`${small ? "small" : ""}`}>
        <Content small={`${small ? "small" : ""}`}>
          <Logo
            small={`${small ? "small" : ""}`}
            onClick={() => {
              navigate("/");
            }}
          >
            {/* YogaR♾️m */}
            YogaRoom
          </Logo>
          <Navbar>
            {user ? (
              <>
                <Option onClick={logout}>Sign Out</Option>
              </>
            ) : (
              <Option onClick={() => setOpen(!open)}>Sign In</Option>
            )}
          </Navbar>
        </Content>
      </Container>
      {open ? (
        <SignIn
          setOpen={setOpen}
          loginEmail={loginEmail}
          setLoginEmail={setLoginEmail}
          loginPassword={loginPassword}
          setLoginPassword={setLoginPassword}
          setSignup={setSignup}
        ></SignIn>
      ) : signup ? (
        <SignUp
          setOpen={setOpen}
          registerEmail={registerEmail}
          setRegisterEmail={setRegisterEmail}
          registerPassword={registerPassword}
          setRegisterPassword={setRegisterPassword}
          setSignup={setSignup}
        ></SignUp>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  /* background: #fff; */
  background-image: ${(props) =>
    props.small
      ? "linear-gradient(135deg, #c59c96, #d3aba4, #d7b0a9, #e2c2ba)"
      : "auto"};
  /* border-bottom: ${(props) =>
    props.small ? "2px solid #e5e5e5" : "none"}; */
  box-shadow: ${(props) => (props.small ? "0px 0px 6px #c59c96" : "none")};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1344px;
  margin: 0 auto;
  padding: ${(props) => (props.small ? "24px 0px" : "24px 0px")};
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
  width: fit-content;
  display: block;
  color: #fff;
  font-weight: 700;
  font-size: ${(props) => (props.small ? "24px" : "28px")};
  letter-spacing: 4px;
  cursor: pointer;
  @media (max-width: 768px) {
    letter-spacing: 2px;
  }
`;

const Navbar = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center; ;
`;

const Option = styled.li`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  margin-right: ${(prop) => (prop.first ? "24px" : "0px")};
  letter-spacing: 2px;
`;
