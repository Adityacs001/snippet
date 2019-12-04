import React, { useEffect, useRef } from "react";
import { Form, Field } from "formik";
import classNames from "classnames";
import Loader from "react-loader-spinner";
import logovert from "../../assets/images/logo-vert.png";
import { useToasts } from "../../Provider/toastcontext";
import { logout } from "../../Provider/actions";
import { getlabeltext } from "../../Utils/labels";
import { useGlobalStateValue } from "../../Provider/globalContext";
import Maincontainer from "../MainContainer";

const LoginForm = ({ errors, isSubmitting }) => {
  const { add } = useToasts();
  const [{ user, lang }] = useGlobalStateValue();

  const didRun = useRef(false);
  useEffect(() => {
    if (!didRun.current) {
      logout();
      didRun.current = true;
    }
  });

  useEffect(() => {
    if (errors.global) add(errors.global, "danger");
  }, [errors.global]);

  return (
    <React.Fragment>
      <Maincontainer>
        {isSubmitting && (
          <div className={classNames("loader")}>
            <Loader type="Watch" color="white" height="100" width="100" />
          </div>
        )}
        <Form className={classNames("form-signin", { "d-none": isSubmitting })}>
          <div className="text-center mb-4">
            <img className="mb-4" src={logovert} alt="HRA Logo" />
            <h1 className="h3 mb-3 font-weight-normal">
              {getlabeltext(lang, "login")}
            </h1>
            <p>{getlabeltext(lang, "loginhelp")}</p>
          </div>
          <div className="form-label-group">
            <Field
              type="text"
              name="username"
              placeholder="Enter username"
              className="form-control"
            />
            <label htmlFor="username"> {getlabeltext(lang, "username")}</label>
            {errors.username && (
              <span className="text-danger">{errors.username}</span>
            )}
          </div>
          <div className="form-label-group">
            <Field
              type="password"
              name="password"
              placeholder="Enter password"
              className="form-control"
            />
            <label htmlFor="password">{getlabeltext(lang, "password")}</label>
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            {getlabeltext(lang, "login")}
          </button>
          <p className="mt-5 mb-3 text-muted text-center">
            &copy;2019, {getlabeltext(lang, "copyright")}
          </p>
        </Form>
      </Maincontainer>
    </React.Fragment>
  );
};

export default LoginForm;
