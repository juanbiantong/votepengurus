import React, { useState } from "react";
import { BoxContainer, FormContainer, Input, SubmitButton } from "./common";
import { Marginer } from "../marginer";
// import { Redirect } from "react-router-dom";
// import { signin, authenticate, isAuthenticated } from "../../auth";
import { Link } from "react-router-dom";

export function LoginForm(props) {
  const [values, setValues] = useState({
    idLogin: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false
  });

  //   const { idLogin, password, loading, error, redirectToReferrer } = values;
  //   const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  //   const clickSubmit = (event) => {
  //     event.preventDefault();
  //     setValues({ ...values, error: false, loading: true });
  //     signin({ idLogin, password }).then((data) => {
  //       if (data.error) {
  //         setValues({ ...values, error: data.error, loading: false });
  //       } else {
  //         authenticate(data, () => {
  //           setValues({
  //             ...values,
  //             redirectToReferrer: true
  //           });
  //         });
  //       }
  //     });
  //   };
  //   const showError = () => (
  //     <div
  //       className="alert alert-danger"
  //       style={{ display: error ? "" : "none" }}
  //     >
  //       {error}
  //     </div>
  //   );

  //   const showLoading = () =>
  //     loading && (
  //       <div className="alert alert-info">
  //         <h2>Loading...</h2>
  //       </div>
  //     );

  //   const redirectUser = () => {
  //     if (redirectToReferrer) {
  //       if (user && user.role === 1) {
  //         return <Redirect to="/admin" />;
  //       } else {
  //         return <Redirect to="/landingpage" />;
  //       }
  //     }
  //     if (isAuthenticated()) {
  //       return <Redirect to="/" />;
  //     }
  //   };

  return (
    <BoxContainer>
      {/* {showLoading()}
      {showError()} */}
      {/* {redirectUser()} */}
      <FormContainer>
        <Input
          type="number"
          id="tglLahir"
          onChange={handleChange("idLogin")}
          //   value={idLogin}
          name="idLogin"
          required
          autoFocus
          placeholder="Tanggal Lahir Contoh: 25121990"
        />

        <Input
          type="password"
          onChange={handleChange("password")}
          //   value={password}
          name="password"
          required
          placeholder="Password"
        />
        <Marginer direction="vertical" margin={10} />
        <Marginer direction="vertical" margin="1.6em" />
        <Link to="/landingpwgt">
          <SubmitButton
            //   onClick={clickSubmit}
            className="w-75 submit-btn p-2 d-flex justify-content-center mx-auto"
            to="/landingpwgt"
            type="submit"
          >
            Login
          </SubmitButton>
        </Link>
      </FormContainer>

      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}
