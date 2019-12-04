import React from "react";
const Ctx = React.createContext();
const ToastContainer = props => (
  <div style={{ position: "fixed", right: 0, bottom: 0 }} {...props} />
);
const Toast = ({ children, onDismiss, type }) => {
  switch (type) {
    case "warning":
      return (
        <div className="alert alert-warning" role="alert" onClick={onDismiss}>
          {children}
          <button type="button" className="close  ml-2">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    case "info":
      return (
        <div className="alert alert-info" role="alert" onClick={onDismiss}>
          {children}
          <button type="button" className="close  ml-2">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );

    case "success":
      return (
        <div className="alert alert-success" role="alert" onClick={onDismiss}>
          {children}
          <button type="button" className="close ml-2">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );

    case "danger":
      return (
        <div className="alert alert-danger" role="alert" onClick={onDismiss}>
          {children}
          <button type="button" className="close  ml-2">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );

    default:
      return (
        <div className="alert alert-primary" role="alert" onClick={onDismiss}>
          {children}
          <button type="button" className="close  ml-2">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
  }
};

let toastCount = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const add = (content, type) => {
    const id = ++toastCount;
    const toast = { content, id, type };
    setToasts([...toasts, toast]);
    setTimeout(() => {
      setToasts([]);
    }, 2000);
  };
  const remove = id => {
    const newToasts = toasts.filter(t => t.id !== id);
    setToasts(newToasts);
  };
  const onDismiss = id => () => remove(id);

  return (
    <Ctx.Provider value={{ add, remove }}>
      {children}
      <ToastContainer>
        {toasts.map(({ content, id, ...rest }) => (
          <Toast key={id} Toast={Toast} onDismiss={onDismiss(id)} {...rest}>
            {content}
          </Toast>
        ))}
      </ToastContainer>
    </Ctx.Provider>
  );
}

export const useToasts = () => React.useContext(Ctx);
