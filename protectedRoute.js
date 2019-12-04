import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { HubConnectionBuilder } from "@aspnet/signalr";
import Cookies from "js-cookie";
import { useToasts } from "../Provider/toastcontext";
import { validatesession } from "../Provider/actions";
import { useGlobalStateValue } from "../Provider/globalContext";
import jwtDecode from "jwt-decode";

const ProtectedRoute = ({ component: Component, ...allprops }) => {
  let [isAuthenticated, setAuthenticated] = useState(
    // localStorage.getItem("jwtToken") != undefined ? true : false
    //Cookies.get("token") ? true : false
    false
  );
  const { add } = useToasts();
  const [{ user }, dispatch] = useGlobalStateValue();

  let [issessionValidated, setIssessionValidated] = useState(false);

  useEffect(() => {
    let isSubscribed = true;
    validatesession()
      .then(({ data }) => {
        if (data.status === true) {
          if (isSubscribed) {
            setAuthenticated(true);
            setIssessionValidated(true);
            let decodeduser = jwtDecode(data.data);
            dispatch({
              type: "SET_USER",
              data: decodeduser
            });
          }
        }
      })
      .catch(({ response }) => {
        if (isSubscribed) {
          setAuthenticated(false);
          setIssessionValidated(true);
        }
      });
    return () => (isSubscribed = false);
  }, [allprops.location]);

  /*
  const [hubConnection, setHubConnection] = useState(null);
  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:54496/notification")
      .build();
    setHubConnection(connection);
  }, []);

  useEffect(() => {
    if (hubConnection != undefined) {
      hubConnection
        .start()
        .then(() => {
          if (hubConnection.connectionState) {
            hubConnection.on("hellomessage", receivedMessage => {
              add(receivedMessage, "danger");
            });

            hubConnection
              .invoke("SendHelloMessage", "sample message")
              .catch(err => console.error(err));
          }
        })
        .catch(err => console.log("Error while establishing connection"));
    }
  }, [hubConnection]);

  */
  return (
    <React.Fragment>
      {issessionValidated && (
        <Route
          {...allprops}
          render={props => {
            return isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            );
          }}
        />
      )}
    </React.Fragment>
  );
};

export default ProtectedRoute;
