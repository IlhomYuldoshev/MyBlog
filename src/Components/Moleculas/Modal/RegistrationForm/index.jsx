import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import Button from "../../../Atoms/Button";
import ModalTypes from "../../../../Constants/ModalTypes";
import {useContextSelector} from "use-context-selector";
import {ModalContext} from "../../../../Context/ModalContext";

const RegistrationForm = () => {
  const mDispatch = useContextSelector(ModalContext, v => v.actions.dispatch)
  const {register, handleSubmit, formState: {errors}, setValue, watch} = useForm();
  const [passwordType, setPasswordType] = useState(true);
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [isSamePassword, setIsSamePassword] = useState(true);
  // const password = watch("password");

  const goRegistrationHandler = () => {
    mDispatch({type: ModalTypes.LOGIN_FORM})
  }

  const handlePasswordType = () => {
    setPasswordType(p => !p);
  }
  console.log(errors)
  // const confirmPasswordHandler = (e) => {
  //   setConfirmPassword(e.target.value);
  //   const isSame = password === confirmPassword;
  //   setIsSamePassword(isSame);
  // }

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <div className="login-form">
      <h2 className="login-form__title">Registration</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="login-form__form">

        {/* ----------------- INPUT EMAIL ------------------ */}
        <label className="login-form__label">
          <span>Email</span>
          {errors.email && <span className="err-span">{errors.email.message}</span>}
          <input
            className="login-form__input"
            type="email"
            {...register("email", {
              required: "This field is required!"
            })}
            placeholder="Enter email"
          />
        </label>

        {/* ----------------- INPUT PASSWORD ------------------ */}
        <label className="login-form__label">
          <span>Password</span>
          {errors.password && <span className="err-span">{errors.password.message}</span>}
          <input
            className="login-form__input"
            type={passwordType ? "password" : "text"}
            {...register("password", {
              required: "This field is required!",
              minLength: {message: "MinLength is 6 symbols", value: 6}
            })}
            placeholder="Enter password"
          />
          <div
            className="login-form__pasInputBtn"
            onClick={handlePasswordType}
            title="View Password"
          >
            {passwordType ? <EyeSvg/> : <EyeSvgNone/>}
          </div>
        </label>

        {/* ----------------- CONFIRM PASSWORD ------------------ */}
        {/*<label className="login-form__label">*/}
        {/*  <span>Confirm Password</span>*/}
        {/*  {!isSamePassword && <span className="err-span">Password is wrong</span>}*/}
        {/*  <input*/}
        {/*    className="login-form__input"*/}
        {/*    type={passwordType ? "password" : "text"}*/}
        {/*    value={confirmPassword}*/}
        {/*    onChange={confirmPasswordHandler}*/}
        {/*    placeholder="Enter password"*/}
        {/*  />*/}
        {/*</label>*/}

        <div className="login-form__submit-btn-wrapper">
          <span onClick={goRegistrationHandler}>Go To Login</span>
          <Button className="login-form__submit-btn">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;


function EyeSvg({className}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      fill="currentColor"
    >
      <path
        d="M279.6 160.4c2.8-.3 5.6-.4 8.4-.4 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96 0-2.8.1-5.6.4-8.4 9.3 4.5 20.1 8.4 31.6 8.4 35.3 0 64-28.7 64-64 0-11.5-3.9-22.3-8.4-31.6zm201-47.8c46.8 43.4 78.1 94.5 92.9 131.1 3.3 7.9 3.3 16.7 0 24.6-14.8 35.7-46.1 86.8-92.9 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.58-80.6C48.62 355.1 17.34 304 2.461 268.3a31.967 31.967 0 0 1 0-24.6C17.34 207.1 48.62 156 95.42 112.6 142.5 68.84 207.2 32 288 32c80.8 0 145.5 36.84 192.6 80.6zM288 112c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144z"/>
    </svg>
  )
}

function EyeSvgNone({className}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      fill="currentColor"
    >
      <path
        d="M150.7 92.77C195 58.27 251.8 32 320 32c80.8 0 145.5 36.84 192.6 80.6 46.8 43.4 78.1 94.5 92.9 131.1 3.3 7.9 3.3 16.7 0 24.6-13.4 32.3-40.3 77.8-79.9 118.4l105.2 82.4c10.4 8.2 12.3 23.3 4.1 33.7-8.2 10.4-23.3 12.3-33.7 4.1L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196 13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zm72.4 56.73 90.3 70.8c4.2-8.5 6.6-18.1 6.6-29.2 0-10.6-3.9-21.4-8.4-30.7 2.8-.3 5.6-1.3 8.4-1.3 53 0 96 43 96 96 0 14.6-2.9 27.6-8.9 39.4l39.5 30.2c11.1-20.4 17.4-43.8 17.4-69.6 0-78.6-64.5-144-144-144-37.3 0-71.4 15.1-96.9 38.4zM320 480c-80.8 0-145.5-36.8-192.6-80.6-46.78-44.3-78.06-95.4-92.94-131.1a31.98 31.98 0 0 1 0-24.6c9.54-22.9 25.83-52.5 48.63-82.2l94.31 74.3c-.9 6.6-1.4 13.3-1.4 19.3 0 80.4 64.5 144.9 144 144.9 18.7 0 36.6-3.6 53-10.1l73.2 57.6C409.9 467.1 367.8 480 320 480z"/>
    </svg>
  )
}
