import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastProvider } from "./Provider/toastcontext";
import ProtectedRoute from "./components/protectedRoute";
import LoginPage from "./components/Login/login.page";
import Home from "./components/home";
import EmployeeList from "./components/Employee/employeelist";
import Employee from "./components/Employee/detail";
import Uploadlist from "./components/FileUploader/upload.list";
import { GlobalProvider } from "./Provider/globalContext";
import { defaultlang } from "./Utils/lookups";
import FAQ from "./components/faq";
import PasswordResetPage from "./components/PasswordReset/PasswordReset.page";

let App = () => {
  const initialState = {
    user: {},
    selectedentity: {},
    lang: defaultlang,
    adgelist: [],
    currentgradelist: [],
    proposedgradelist: [],
    contracttypelist: [],
    employmentstatuslist: [],
    educationgroup: [],
    educationmajor: [],
    educationmapping: [],
    university: [],
    allowancelist: [],
    allowanceentrytype: [],
    salarystructuretypelist: [],
    educationmapping: [],
    employeestatus: [],
    employeestatusreason: [],
    statussteps: []
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_STATUS_STEP":
        return {
          ...state,
          statussteps: action.data
        };
      case "GET_STATUS_STEP":
        return state.statussteps;

      case "SET_EMPLOYEE_STATUS_REASON":
        return {
          ...state,
          employeestatusreason: action.data
        };
      case "GET_EMPLOYEE_STATUS_REASON":
        return state.employeestatusreason;

      case "SET_EMPLOYEE_STATUS":
        return {
          ...state,
          employeestatus: action.data
        };
      case "GET_EMPLOYEE_STATUS":
        return state.employeestatus;

      case "SET_USER":
        return {
          ...state,
          user: action.data
        };
      case "GET_USER":
        return state.user;

      case "SET_ENTITY":
        return {
          ...state,
          selectedentity: action.data
        };
      case "GET_ENTITY":
        return state.selectedentity;

      case "GET_LANG":
        return state.lang;

      case "SET_LANG":
        return {
          ...state,
          lang: action.data
        };

      case "GET_CURRENTGRADE":
        return state.currentgradelist;

      case "SET_CURRENTGRADE":
        return {
          ...state,
          currentgradelist: action.data
        };

      case "GET_PROPOSEDGRADE":
        return state.proposedgradelist;

      case "SET_PROPOSEDGRADE":
        return {
          ...state,
          proposedgradelist: action.data
        };

      case "GET_CONTRACTTYPE":
        return state.contracttypelist;

      case "SET_CONTRACTTYPE":
        return {
          ...state,
          contracttypelist: action.data
        };

      case "GET_EMPLOYMENTSTATUS":
        return state.employmentstatuslist;

      case "SET_EMPLOYMENTSTATUS":
        return {
          ...state,
          employmentstatuslist: action.data
        };

      case "GET_EDUCTATIONGROUP":
        return state.educationgroup;

      case "SET_EDUCTATIONGROUP":
        return {
          ...state,
          educationgroup: action.data
        };

      case "GET_EDUCTATIONMAJOR":
        return state.educationmajor;

      case "SET_EDUCTATIONMAJOR":
        return {
          ...state,
          educationmajor: action.data
        };

      case "GET_EDUCTATION_MAPPING":
        return state.educationmapping;

      case "SET_EDUCTATION_MAPPING":
        return {
          ...state,
          educationmapping: action.data
        };

      case "GET_UNIVERSITY":
        return state.university;

      case "SET_UNIVERSITY":
        return {
          ...state,
          university: action.data
        };

      case "GET_ALLOWANCE":
        return state.allowancelist;

      case "SET_ALLOWANCE":
        return {
          ...state,
          allowancelist: action.data
        };

      case "GET_ALLOWANCEENTRYTYPE":
        return state.allowanceentrytype;

      case "SET_ALLOWANCEENTRYTYPE":
        return {
          ...state,
          allowanceentrytype: action.data
        };

      case "GET_ADGELIST":
        return state.adgelist;

      case "SET_ADGELIST":
        return {
          ...state,
          adgelist: action.data
        };

      case "GET_SALARYSTRUCTURETYPE":
        return state.salarystructuretypelist;

      case "SET_SALARYSTRUCTURETYPE":
        return {
          ...state,
          salarystructuretypelist: action.data
        };

      default:
        return state;
    }
  };

  return (
    <GlobalProvider initialState={initialState} reducer={reducer}>
      <ToastProvider>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute exact path="/employees" component={EmployeeList} />
          <ProtectedRoute exact path="/employee/:id" component={Employee} />
          <ProtectedRoute exact path="/uploads" component={Uploadlist} />
          <ProtectedRoute exact path="/faq" component={FAQ} />
          <ProtectedRoute
            exact
            path="/changepassword"
            component={PasswordResetPage}
          />
          <Route exact path="/login" component={LoginPage} />
          <Route component={LoginPage} />
        </Switch>
      </ToastProvider>
    </GlobalProvider>
  );
};

export default App;
