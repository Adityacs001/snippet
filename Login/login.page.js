import { withFormik } from "formik";
import * as Yup from "yup";
import LoginForm from "./login.form";
import "../../assets/css/login.css";
import { login, setAuthorizationToken, logout } from "../../Provider/actions";
import { getlabeltext } from "../../Utils/labels";

const LoginPage = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(getlabeltext(1, "usernameismandatory")),
    password: Yup.string().required(getlabeltext(1, "passwordismandatory"))
  }),
  handleSubmit(
    { username, password },
    { props, resetForm, setErrors, setSubmitting }
  ) {
    setSubmitting(true);
    login({
      username,
      password
    })
      .then(({ data }) => {
        if (data.status) {
          const token = data.data;
          setAuthorizationToken(token);
          props.history.push("/home");
        } else {
          setErrors({ global: data.message });
        }
        setSubmitting(false);
      })
      .catch(({ response }) => {
        const { data } = response;
        setErrors({ global: data.message });
        setSubmitting(false);
      });
  }
})(LoginForm);

export default LoginPage;
