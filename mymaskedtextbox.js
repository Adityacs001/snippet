import React from "react";
import classNames from "classnames";
import { Form } from "react-bootstrap";
import { Field } from "formik";
import MaskedInput from "react-text-mask";
import { Emiratesidmask } from "../Utils/helpers";

const MyMaskedTextBox = props => {
  return (
    <React.Fragment>
      <Form.Group>
        <Form.Label className="h6">{props.label}</Form.Label>
        <Field
          name={props.name}
          render={({ field }) => (
            <MaskedInput
              {...field}
              mask={Emiratesidmask}
              id={props.id}
              placeholder={props.placeholder}
              type={props.type}
              className={classNames(
                "form-control",
                { "is-invalid": props.touched && props.errors },
                { "is-valid": props.touched && !props.errors }
              )}
              disabled={props.disabled}
            />
          )}
        />
        {props.helpnote && (
          <Form.Text className="text-muted">
            <i className="fas fa-info-circle" />
            <span className="ml-3">{props.helpnote}</span>
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

export default MyMaskedTextBox;
