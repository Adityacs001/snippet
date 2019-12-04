import React from "react";
import classNames from "classnames";
import { Form } from "react-bootstrap";
import { Field } from "formik";
import { getlabeltext } from "../Utils/labels";
import { useGlobalStateValue } from "../Provider/globalContext";
const MySelect = props => {
  const [{ lang }] = useGlobalStateValue();

  return (
    <React.Fragment>
      <Form.Group>
        <Form.Label className="h6">{props.label}</Form.Label>
        <Field
          style={{ height: "40px" }}
          as="select"
          disabled={props.disabled}
          field={props.name}
          name={props.name}
          className={classNames(
            "form-control",
            { "is-invalid": props.touched && props.errors },
            { "is-valid": props.touched && !props.errors }
          )}
          component="select"
          id={props.id}
        >
          <option key="0" value="">
            {getlabeltext(lang, "select")}
          </option>
          {props.optionlist &&
            props.optionlist.map(item => (
              <option key={item.id} value={item.id}>
                {lang == 1 ? item.titleae : item.titleen}
              </option>
            ))}
        </Field>
        {props.helpnote && (
          <Form.Text className="text-muted">
            <i className="fas fa-info-circle" />
            <span className="ml-3">{props.helpnote}</span>
          </Form.Text>
        )}
        {props.errors ? (
          <Form.Text className="text-danger">{props.errors}</Form.Text>
        ) : null}
      </Form.Group>
    </React.Fragment>
  );
};

// const MySelect = props => {
//   const { fieldState, fieldApi, render, ref, userProps } = useField({
//     ...props
//   });
//   const { value } = fieldState;
//   const { setValue, setTouched } = fieldApi;
//   const { onChange, onBlur, ...rest } = userProps;

//   return render(
//     <React.Fragment>
//       <Form.Group>
//         <Form.Label className="h6">{userProps.label}</Form.Label>
//         <Form.Control
//           as="select"
//           field={userProps.name}
//           className={classNames(
//             "form-control",
//             { "is-invalid": fieldState.error },
//             { "is-valid": fieldState.touched && !fieldState.error }
//           )}
//           name={userProps.name}
//           {...rest}
//           ref={ref}
//           value={!value && value !== 0 ? "" : value}
//           onChange={e => {
//             setValue(e.target.value);
//             if (onChange) {
//               onChange(e);
//             }
//           }}
//           onBlur={e => {
//             setTouched(true);
//             if (onBlur) {
//               onBlur(e);
//             }
//           }}
//         >
//           <option key="0" value="" disabled>
//             Select One...
//           </option>
//           {userProps.optionlist &&
//             userProps.optionlist.map(item => (
//               <option key={item.id} value={item.id}>
//                 {item.titleen}
//               </option>
//             ))}
//         </Form.Control>
//         {userProps.helpnote && (
//           <Form.Text className="text-muted">
//             <i className="fas fa-info-circle" />
//             <span className="ml-3">{userProps.helpnote}</span>
//           </Form.Text>
//         )}
//         {fieldState.error ? (
//           <Form.Text className="text-danger">{fieldState.error}</Form.Text>
//         ) : null}
//       </Form.Group>
//     </React.Fragment>
//   );
// };

export default MySelect;
