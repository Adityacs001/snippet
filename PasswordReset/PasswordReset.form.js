import React, { useEffect, useRef } from "react";
import { Form, Field } from "formik";
import classNames from "classnames";
import Loader from "react-loader-spinner";
import { useToasts } from "../../Provider/toastcontext";
import { getlabeltext } from "../../Utils/labels";
import { useGlobalStateValue } from "../../Provider/globalContext";
import Maincontainer from "../MainContainer";
import { Container, Row, Col, Button } from "react-bootstrap";
import MyTextBox from "../mytextbox";
import isEmpty from "lodash/isEmpty";
import Header from "../header";

const PassWordResetForm = ({
  errors,
  isSubmitting,
  touched,
  resetForm,
  isInitialValid,
  setFieldValue
}) => {
  const { add } = useToasts();
  const [{ lang, selectedentity, user }] = useGlobalStateValue();

  useEffect(() => {
    if (errors.global) add(errors.global, "danger");
  }, [errors.global]);

  return (
    <React.Fragment>
      <Maincontainer>
        <Header />
        <Container>
          <div
            className={classNames(
              "d-flex align-items-center p-2 mt-3 mb-1 text-white-50 bg-gold rounded shadow-sm"
            )}
          >
            <i className="fas fa-users fa-2x" />
            <div className="lh-100">
              <h6 className="mb-0 text-white lh-100 mr-2 ">
                {getlabeltext(lang, "employeelist")}
              </h6>
            </div>
          </div>

          <div
            className={classNames("pl-3 pr-3 pb-3 bg-white rounded shadow-sm", {
              "d-none":
                selectedentity == undefined || selectedentity.id === undefined
            })}
          >
            {isSubmitting && (
              <div className={classNames("loader")}>
                <Loader type="Watch" color="white" height="100" width="100" />
              </div>
            )}
            <Form className={classNames("", { "d-none": isSubmitting })}>
              <Row>
                <Col sm={12}>
                  <MyTextBox
                    type="text"
                    field="newpassword"
                    label={getlabeltext(lang, "newpassword")}
                    id="newpassword"
                    name="newpassword"
                    placeholder={getlabeltext(lang, "enternewpassword")}
                    errors={errors.newpassword}
                    touched={touched.newpassword}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <MyTextBox
                    type="text"
                    field="confirmpassword"
                    label={getlabeltext(lang, "confirmpassword")}
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder={getlabeltext(lang, "enterconfirmpassword")}
                    errors={errors.confirmpassword}
                    touched={touched.confirmpassword}
                  />
                </Col>
              </Row>

              <Row className="mt-2 pr-3">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isSubmitting || isInitialValid || !isEmpty(errors)}
                >
                  {getlabeltext(lang, "submit")}
                </Button>
                <Button
                  variant="secondary"
                  type="button"
                  onClick={e => {
                    resetForm();
                  }}
                  className="mr-2"
                >
                  {getlabeltext(lang, "reset")}
                </Button>
              </Row>
            </Form>
          </div>
        </Container>
      </Maincontainer>
    </React.Fragment>
  );
};

export default PassWordResetForm;
