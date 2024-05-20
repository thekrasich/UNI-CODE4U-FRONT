import React, { useEffect, useState } from "react";
import { ModalItemBox } from "../../styled/HeaderStyled";
import LogInModalPart from "../../UI/LogInModal/LogIn/LogInModalPart";
import SignUpModalPart from "../../UI/LogInModal/SignUp/SignUpModalPart";
import * as Yup from "yup";
import * as _ from "lodash";
import { Formik, Form } from "formik";

export default function LogIn() {
  const [formData, setFormData] = useState(null);
  const [logInForm, setFormType] = useState(true);

  const requiredScheme = Yup.string().required("This field is required");
  const emailScheme = requiredScheme.email("Email is invalid");
  const namesScheme = requiredScheme.min(2, "Name should be at least 2 characters");

  const validateLogIn = Yup.object().shape({ email: emailScheme, password: requiredScheme });

  const logInitValues = { email: "", password: "" };

  const signInitValues = {...logInitValues, name: "", surname: "", phone: ""}

  const validateSignUp = Yup.object().shape({
    email: emailScheme,
    password: requiredScheme
      .min(8, "Password has to be at least 8 characters")
      .matches(/[a-z]/, "Password should contain at least 1 lower case letter")
      .matches(/[A-Z]/, "Password should contain at least 1 upper case letter")
      .matches(/[0-9]/, "Password should contain at least 1 digit")
      .matches(
        /[@$!%*#?&]/,
        "Password should contain at least 1 special character"
      )
      .notOneOf([Yup.ref("email"), null], "Password is same as email"),
    name: namesScheme,
    surname: namesScheme,
    phone: requiredScheme.matches(
      /^(\+?[\d\s]{3,})([\s-]?)([\d\s]{3,})$/,
      "Please enter valid phone number"
    ),
  });

  const onSubmit = (values) => {
    setFormData(values);
  };

  const switchForm = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    setFormType(!logInForm);
  };

  useEffect(() => {
    if(_.isEmpty(formData)) return;

    if (_.isEmpty(formData["name"])) {
      console.log("Log in");
    } else {
      console.log("Sign up");
    }

    console.log(formData);
  }, [formData]);

  return (
    <ModalItemBox
      sx={{
        width: {
          xs: "100%",
          sm: "60vw",
          md: "50vw",
          xl: "35vw",
        },
      }}
    >
      <Formik
        initialValues={logInForm ? logInitValues : signInitValues}
        validationSchema={logInForm ? validateLogIn : validateSignUp}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <Form>
          {logInForm ? (
            <LogInModalPart
              switchForm={switchForm}
            />
          ) : (
            <SignUpModalPart
              switchForm={switchForm}
            />
          )}
        </Form>
      </Formik>
    </ModalItemBox>
  );
}
