import React from "react";
import classNames from "classnames";
import { Form } from "react-bootstrap";
import { Field } from "formik";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead-bs4.css";
import { Typeahead } from "react-bootstrap-typeahead";
import head from "lodash/head";
import isEmpty from "lodash/isEmpty";
import filter from "lodash/filter";
import pick from "lodash/pick";
import { useGlobalStateValue } from "../Provider/globalContext";
import { getlabeltext } from "../Utils/labels";

const WrappedAutoComplete = props => {
  const [{ lang }] = useGlobalStateValue();

  const { field, form } = props;

  const getDefaultvalue = () => {
    let selectedarr = [];
    selectedarr = filter(
      props.optionlist,
      val => parseInt(val.id) === parseInt(field.value)
    );
    return selectedarr;
  };
  return (
    <React.Fragment>
      <Typeahead
        defaultSelected={getDefaultvalue()}
        id={field.name}
        name={field.name}
        clearButton
        labelKey={lang == 1 ? "titleae" : "titleen"}
        options={props.optionlist}
        placeholder={getlabeltext(lang, "select")}
        onBlur={event => {}}
        onChange={selected => {
          form.setFieldValue(
            field.name,
            !isEmpty(selected) ? head(selected).id : ""
          );
          if (props.changecallback != undefined) {
            props.changecallback(field.name);
          }
        }}
        onInputChange={(text, event) => {}}
        ref={ref => {
          if (props.assignParentref != undefined) props.assignParentref(ref);
        }}
      />
    </React.Fragment>
  );
};

export const SimpleAutoComplete = props => {
  const [{ lang }] = useGlobalStateValue();
  const { id, name, value, placeholder } = props;

  const getDefaultvalue = () => {
    let selectedarr = [];
    selectedarr = filter(
      props.optionlist,
      val => parseInt(val.id) === parseInt(value)
    );
    return selectedarr;
  };
  return (
    <React.Fragment>
      <Typeahead
        className={name}
        defaultSelected={getDefaultvalue()}
        id={id}
        name={name}
        clearButton
        labelKey={lang == 1 ? "titleae" : "titleen"}
        options={props.optionlist}
        placeholder={placeholder}
        onChange={selected => {
          if (props.changecallback != undefined) {
            props.changecallback(!isEmpty(selected) ? head(selected) : {});
          }
        }}
      />
    </React.Fragment>
  );
};

const MyAutoComplete = props => {
  return (
    <React.Fragment>
      <Form.Group>
        <Form.Label className="h6">{props.label}</Form.Label>
        <Field
          id={props.id}
          name={props.name}
          className={classNames(
            "form-control",
            { "is-invalid": props.touched && props.errors },
            { "is-valid": props.touched && !props.errors }
          )}
          component={WrappedAutoComplete}
          optionlist={props.optionlist}
          changecallback={props.changecallback}
          assignParentref={props.assignParentref}
        />
        {props.helpnote && (
          <Form.Text className="text-muted">
            <i className="fas fa-info-circle" />
            <span className="mr-1">{props.helpnote}</span>
          </Form.Text>
        )}
        {props.errors ? (
          <Form.Text className="text-danger">{props.errors}</Form.Text>
        ) : null}
      </Form.Group>
    </React.Fragment>
  );
};

export default MyAutoComplete;
