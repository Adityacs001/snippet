import { withFormik } from "formik";
import * as Yup from "yup";
import { changepassword } from "../../Provider/actions";
import { getlabeltext } from "../../Utils/labels";
import PassWordResetForm from "./PasswordReset.form";

const PasswordResetPage = withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => {
    return {
      newpassword: "",
      confirmpassword: ""
    };
  },
  validationSchema: props => {
    return Yup.object().shape({
      newpassword: Yup.string()
        .required(getlabeltext(props.lang, "fieldismandatory"))
        .min(8, getlabeltext(props.lang, "passwordstrong"))
        .max(50, getlabeltext(props.lang, "passwordstrong"))
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          getlabeltext(props.lang, "passwordstrong")
        ),
      confirmpassword: Yup.string()
        .required(getlabeltext(props.lang, "fieldismandatory"))
        .oneOf(
          [Yup.ref("newpassword"), null],
          getlabeltext(props.lang, "Passwordmissmatch")
        )
    });
  },
  handleSubmit(values, { props, setSubmitting, setErrors }) {
    setSubmitting(true);
    let payload = {
      ...values,
      lang: props.lang
    };
    changepassword(payload)
      .then(({ data }) => {
        if (data.status) {
          props.history.push("/login");
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
})(PassWordResetForm);

export default PasswordResetPage;
