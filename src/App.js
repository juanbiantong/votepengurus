import React, { useReducer, createContext, useState } from 'react';
import styled from "styled-components";
import { AppContainer, HeaderContainer, HeaderText, MidleText, SmallText } from './components/accountBox';
import { } from './components/accountBox/common'
import { Marginer } from "./components/marginer";
import Admin from "./components/admin/Admin";
import Jemaat from "./components/jemaat/Jemaat";
import { AccountBox } from "./components/accountBox";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export const AuthContext = createContext();
const initiaState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const BoxContainer = styled.div`
  width: 320px;
  min-height: 568px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(169, 178, 230, 0.9);
  position: relative;
  overflow: hidden;
  padding-top: 0.5em;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2em;

`;

const BackDrop = styled.div`
  width: 160%;
  height: 600px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -260px;
  left: -70px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  z-index: 9;
`;

const CountBox = styled.div`
  border-radius: 15px;
  background: linear-gradient(to right, red, green, blue);
  padding: 2px;
`
const CountBoxInner = styled.div`
  border-radius: 13px;
  background-color: white;
`
export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19); */
  border-radius: 10px;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('user', JSON.stringify(action.payload.user));
      localStorage.setItem('token', JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload.user,
      };

    default:
      return state;
  }
};



function App() {
  const [state, dispatch] = useReducer(reducer, initiaState);
  const [openApp, setOpenApp] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // let countDownDate = new Date("Aug 1, 2021 11:00:00").getTime();
  let countDownDate = new Date("Jul 31, 2021 13:00:00").getTime();

  // Update the count down every 1 second
  let countdownfunction = setInterval(function () {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now an the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds


    // Output the result in an element with id="demo"
    if (distance > 0) {
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }

    // If the count down is over, write some text 
    if (distance < 0) {
      setOpenApp(true)
      clearInterval(countdownfunction);
    }
  }, 1000);
  return (

    <>{openApp === false ? (
      <AppContainer>
        <BoxContainer>
          <TopContainer>

            <BackDrop
            />

            <HeaderContainer >

              <HeaderText>Mohon bersabar. Aplikasi pemilihan akan segera dibuka pada:</HeaderText>
              <MidleText className="bg-warning mx-auto rounded p-2">
                <strong>
                  Minggu, 1 Agustus 2021
                </strong>
                <br />
                <strong>
                  Pukul 11:00 WIB
                </strong>

              </MidleText>

              <SmallText>
                Silahkan menghubungi Tim PPD yang bertugas jika terdapat kendala saat proses pemilihan!
              </SmallText>
              <SmallText>
                Proses pemilihan berlangsung hingga pukul 16:00 WIB.
              </SmallText>
            </HeaderContainer>

          </TopContainer>

          <FormContainer className="mt-3 pt-3">
            <div className="loadingio-spinner-pulse-82bikf67df">
              <div className="ldio-e9m0nhjt9n">
                <div></div><div></div><div></div>
              </div>
            </div>
            <CountBox className="middle mr-3 ml-3 mt-5">
              <CountBoxInner className="p-2">
                <h3>SEGERA!!!</h3>
                <div style={{ fontSize: 36 }} className="d-flex justify-content-around" >
                  <div>
                    <p className="m-0">{days}</p>
                    <p style={{ fontSize: 18 }}>Hari</p>
                  </div>:
                  <div>
                    <p className="m-0">{hours}</p>
                    <p style={{ fontSize: 18 }}>Jam</p>
                  </div>:
                  <div>
                    <p className="m-0">{minutes}</p>
                    <p style={{ fontSize: 18 }}>Menit</p>
                  </div>:
                  <div>
                    <p className="m-0">{seconds}</p>
                    <p style={{ fontSize: 18 }}>Detik</p>
                  </div>
                </div>
              </CountBoxInner>
            </CountBox>
          </FormContainer>
          <Marginer direction="vertical" margin="1em" />
        </BoxContainer>
      </AppContainer >
    ) : <Router>
      <Switch>
        <AuthContext.Provider
          value={{
            state,
            dispatch,
          }}
          >
          <Route exact path="/" component={AccountBox} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/landingpage" component={Jemaat}></Route>
          <Route exact path="/votepage" component={Jemaat}></Route>
          <Route exact path="/confirmpage" component={Jemaat}></Route>
          <Route exact path="/resultpage" component={Jemaat}></Route>

        </AuthContext.Provider>
      </Switch>
    </Router>}

    </>
  );
}

export default App;
