import createStore from "react-waterfall";
import axios from "axios";
import { setAuthorizationToken } from "./actions";
import jwtDecode from "jwt-decode";

const config = {
  initialState: {
    lang: 0,
    isloading: false,
    apiresponse: {
      status: false,
      message: "",
      data: null
    },
    user: {
      isAuthenticated: false,
      data: null
    },
    currentemployee: {},
    allemployees: []
  },
  actionsCreators: {
    setlang: ({ lang }, _a, input) => ({
      lang: input
    }),
    setLoading: ({ isloading }, _a, loading) => ({
      isloading: loading
    }),
    setapiresponse: (_s, _a, input) => {
      _s.apiresponse.status = input.status;
      _s.apiresponse.message = input.message;
      _s.apiresponse.data = input.data;
      return _s;
    },
    setCurrentEmployee: (_s, _a, input) => {
      _s.currentemployee = input;
      return _s;
    },
    login: async (_s, _a, input) => {
      return await axios
        .post("/api/authenticate", input)
        .then(({ data }) => {
          const token = data.data;
          localStorage.setItem("jwtToken", token);
          setAuthorizationToken(token);
          _a.setCurrentUser(jwtDecode(token));
        })
        .catch(response => {
          _a.setCurrentUser(undefined);
        });
    },
    logout: async (_s, _a) => {
      localStorage.removeItem("jwtToken");
      setAuthorizationToken(undefined);
      _a.setCurrentUser(undefined);
      return _s;
    },
    setCurrentUser: (_s, _a, data) => {
      _s.user.isAuthenticated = data !== undefined ? true : false;
      _s.user.data = data;
      return _s;
    },
    savepersonal: async (_s, _a, input) => {
      return await axios
        .post("/api/employee/savepersonal", input)
        .then(({ data }) => {
          _a.setapiresponse(data);
          _a.setCurrentEmployee(data.data);
        })
        .catch(response => {
          //Below is response object of axios on catch
          //response {
          // config: {adapter: ƒ, transformRequest: {…}, transformResponse: {…}, timeout: 0, xsrfCookieName: "XSRF-TOKEN", …}
          // request: XMLHttpRequest {onreadystatechange: ƒ, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
          // response: {data: {…}, status: 500, statusText: "Internal Server Error", headers: {…}, config: {…}, …}
          // message: "Request failed with status code 500"
          // stack: "Error: Request failed with status code 500↵    at createError (http://localhost:3000/static/js/3.chunk.js:1186:15)↵    at settle (http://localhost:3000/static/js/3.chunk.js:1328:12)↵    at XMLHttpRequest.handleLoad (http://localhost:3000/static/js/3.chunk.js:728:7)"
          // }
          _a.setapiresponse({
            status: false,
            message: response.message,
            data: undefined
          });
        });
    },
    getemployeebyid: async (_s, _a, input) => {
      return await axios
        .post("/api/employee/getemployeebyid", input)
        .then(response => {
          const { data } = response;
          _a.setapiresponse(data);
          _a.setCurrentEmployee(data.data);
        })
        .catch(response => {
          _a.setapiresponse({
            status: false,
            message: response.message,
            data: undefined
          });
        });
    },
    getallemployees: async (_s, _a, input) => {
      return await axios
        .post("/api/employee/getallemployees", input)
        .then(response => {
          const { data } = response;
          _a.setapiresponse(data);
          _s.allemployees = [..._s.allemployees, data.data];
        })
        .catch(response => {
          _a.setapiresponse({
            status: false,
            message: response.message,
            data: undefined
          });
        });
    }
  }
};

export const { Provider, connect, actions, subscribe } = createStore(config);
