import React, { useState } from "react";
import { BoxContainer, FormContainer, Input, SubmitButton } from "./common";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";

export function LoginForm(props) {
  const [values, setValues] = useState({
    idLogin: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type='text'
          id='tglLahir'
          onChange={handleChange("idLogin")}
          name='idLogin'
          required
          autoFocus
          placeholder='Username'
        />

        <Input
          type='password'
          onChange={handleChange("password")}
          name='password'
          required
          placeholder='Password'
        />
        <Marginer direction='vertical' margin={10} />
        <Marginer direction='vertical' margin='1.6em' />
        <Link to='/landingppgt'>
          <SubmitButton
            className='w-75 submit-btn p-2 d-flex justify-content-center mx-auto'
            type='submit'
          >
            Login
          </SubmitButton>
        </Link>
      </FormContainer>

      <Marginer direction='vertical' margin='1em' />
    </BoxContainer>
  );
}
