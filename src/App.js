import React, { useReducer, createContext } from "react";
import styled from "styled-components";
import {} from "./components/accountBox/common";
import { AccountBox } from "./components/accountBox";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Ppgt from "./components/ppgt/Ppgt";

export const AuthContext = createContext();
const initiaState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19); */
  border-radius: 10px;
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };

    case "LOGOUT":
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

  return (
    <>
      <Router>
        <Switch>
          <AuthContext.Provider
            value={{
              state,
              dispatch,
            }}
          >
            <Route exact path='/' component={AccountBox} />
            <Route exact path='/landingppgt' component={Ppgt}></Route>
            <Route exact path='/votepage' component={Ppgt}></Route>
            <Route exact path='/votepenasehat' component={Ppgt}></Route>
            <Route exact path='/confirmpage' component={Ppgt}></Route>
            <Route exact path='/resultpage' component={Ppgt}></Route>
          </AuthContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
