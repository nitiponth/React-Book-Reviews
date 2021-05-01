import React, { Fragment } from "react";

import useInput from "../../hooks/use-input";
import auth from "../../firebase";

const RegisterDetails = (props) => {
  // const username = props.location.username;
  const email = props.location.email;
  const pass = props.location.pass;

  const isNotEmpty = (value) => value.trim() !== "";

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredLocation,
    valueChangeHandler: LocationChangeHandler,
  } = useInput(() => {});

  const {
    value: enteredDetails,
    valueChangeHandler: detailsChangeHandler,
  } = useInput(() => {});

  let formIsValid = false;

  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputClasses = nameInputError
    ? "block uppercase text-red-500 text-xs font-bold mb-2"
    : "block uppercase text-blueGray-600 text-xs font-bold mb-2";

  const submitHandler = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, pass);
  };

  return (
    <Fragment>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-10">
                <form onSubmit={submitHandler}>
                  <div className="relative w-full mb-3">
                    <label className={nameInputClasses} htmlFor="grid-password">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="name"
                      value={enteredName}
                      onChange={nameChangeHandler}
                      onBlur={nameBlurHandler}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="location"
                      value={enteredLocation}
                      onChange={LocationChangeHandler}
                      placeholder="Location"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      About you
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      style={{ height: "100px" }}
                      id="details"
                      value={enteredDetails}
                      onChange={detailsChangeHandler}
                      placeholder="favorite subjects, or really anything you know a lot about"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      disabled={!formIsValid}
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterDetails;
