import axios from "axios";
export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else delete axios.defaults.headers.common["Authorization"];
}

export async function login(credentials) {
  return await axios.post("/api/authenticate", credentials);
}

export async function validatesession() {
  return await axios.get("/api/authenticate/validatesession");
}

export async function logout() {
  localStorage.removeItem("jwtToken");
  setAuthorizationToken(undefined);
  return await axios.post(
    "/api/authenticate/logout",
    {},
    { withCredentials: true }
  );
}

export async function getallemployees(input) {
  return await axios.post("/api/employee/getallemployees", input);
}

export async function getallemployeesextended(input) {
  return await axios.post("/api/employee/getallemployeesextended", input);
}

export async function getemployeebyid(input) {
  return await axios.post("/api/employee/getemployeebyid", input);
}

export async function savepersonal(input) {
  return await axios.post("/api/employee/savepersonal", input);
}

export async function saveeducation(input) {
  return await axios.post("/api/employee/saveeducation", input);
}

export async function deleteeducation(input) {
  return await axios.post("/api/employee/deleteeducation", input);
}

export async function saveotherallowance(input) {
  return await axios.post("/api/employee/saveotherallowance", input);
}

export async function deleteotherallowance(input) {
  return await axios.post("/api/employee/deleteotherallowance", input);
}

export async function deleteschoolallowance(input) {
  return await axios.post("/api/employee/deleteschoolallowance", input);
}

export async function saveexperience(input) {
  return await axios.post("/api/employee/saveexperience", input);
}

export async function deleteexperience(input) {
  return await axios.post("/api/employee/deleteexperience", input);
}

export async function savemonthlysalary(input) {
  return await axios.post("/api/employee/savemonthlysalary", input);
}

export async function saveannualbenefits(input) {
  return await axios.post("/api/employee/saveannualbenefits", input);
}

export async function uploadfile(input) {
  return await axios.post("/api/employee/uploadfile", input);
}

export async function getalluploadforemployee(input) {
  return await axios.post("/api/employee/uploadbyentity", input);
}

export async function downloadfilebyid(input) {
  return await axios.post("/api/employee/downloadfilebyid", input);
}

export async function deletefilebyid(input) {
  return await axios.post("/api/employee/deletefilebyid", input);
}

export async function employeeuploadbyid(input) {
  return await axios.post("/api/employee/employeeuploadbyid", input);
}

export async function employeecalculation(input) {
  return await axios.post("/api/employee/employeecalculation", input);
}

export async function updateemployeestatus(input) {
  return await axios.post("/api/employee/updateemployeestatus", input);
}

export async function verifyemiratesID(input) {
  return await axios.post("/api/employee/verifyemiratesID", input);
}

export async function savemaindetail(input) {
  return await axios.post("/api/employee/savemaindetail", input);
}
export async function changepassword(input) {
  return await axios.post("/api/employee/changepassword", input);
}

export async function getmaindetail(input) {
  return await axios.post("/api/employee/getmaindetail", input);
}

export async function getmainlookup(input) {
  return await axios.post("/api/employee/getmainlookup", input);
}

export async function getstaticlookup(input) {
  return await axios.post("/api/employee/getstaticlookup", input);
}

export async function getdashboard(input) {
  return await axios.post("/api/employee/getdashboard", input);
}
