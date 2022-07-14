import React from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BoxContainer = styled.div`
  width: 320px;
  min-height: 568px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(169, 178, 230, 0.9);
  position: relative;
  overflow: hidden;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 2em;
  padding-bottom: 1em;
`;

export const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -250px;
  left: -70px;
  background-image: linear-gradient(
    to right,
    #026ab0 0%,
    #0093cd 51%,
    #0727b8 90%
  ) !important;
  z-index: 9;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
  text-align: center;
`;

export const MidleText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;
export const SmallText = styled.p`
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
  font-style: italic;
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

export const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

export const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  return (
    <React.Fragment>
      <AppContainer>
        <BoxContainer>
          <TopContainer>
            <BackDrop />
            <HeaderContainer>
              <HeaderText>Aplikasi Pemilihan Pengurus</HeaderText>
              <HeaderText>PPGT Jemaat Depok</HeaderText>
              <SmallText className='bg-warning rounded p-2'>
                Silahkan masukkan Username dan Password untuk melakukan
                pemilihan!
              </SmallText>
            </HeaderContainer>
          </TopContainer>
          <InnerContainer>
            <LoginForm />
          </InnerContainer>
        </BoxContainer>
      </AppContainer>
    </React.Fragment>
  );
}
