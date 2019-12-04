import React from "react";
import classNames from "classnames";
import { Form } from "react-bootstrap";
import { Field } from "formik";
import MaskedInput from "react-text-mask";
import { Emiratesidmask } from "../Utils/helpers";

const MyMaskedTextBoxWithbutton = props => {
  return (
    <React.Fragment>
      <Form.Group>
        <Form.Label className="h6">{props.label}</Form.Label>
        <Field
          name={props.name}
          render={({ field }) => (
            <div className="input-group">
              <MaskedInput
                {...field}
                mask={Emiratesidmask}
                id={props.id}
                placeholder={props.placeholder}
                type={props.type}
                className={classNames(
                  "form-control bd-left-fix",
                  { "is-invalid": props.touched && props.errors },
                  { "is-valid": props.touched && !props.errors }
                )}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary bd-right-fix"
                  onClick={e => props.onactionclick(e)}
                  type="button"
                  disabled={!props.isactionvalid}
                >
                  {props.action}
                </button>
              </div>
            </div>
          )}
        />
        {props.helpnote && (
          <Form.Text className="text-muted">
            <i className="fas fa-info-circle" />
            <span className="mr-1">{props.helpnote}</span>
          </Form.Text>
        )}
        {props.errors ? (
          <Form.Text className="text-danger invalid-feedback">
            {props.errors}
          </Form.Text>
        ) : null}
      </Form.Group>
    </React.Fragment>
  );
};

export default MyMaskedTextBoxWithbutton;
