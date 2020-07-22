import axios from "axios";
import { API } from "../constants";
import { appendDataToFormData } from "../common-component-methods"

const user = {
  active: true,
  isPersonal: true,
  isInformationComplete: false,
  _id: "5dc6a4595a7bd3a69dff7e82",
  mobileVerified: false,
  emailVerified: false,
  email: "marshal_1960@yahoo.com",
  lastName: "mohseni nasab",
  firstName: "mehdi",
  mobile: "09125551010",
  role: "user",
  createAt: "2019-11-09T11:34:49.473Z",
  lastUpdate: "2020-02-10T17:37:39.982Z",
  block: "13",
  byStreet: "Street",
  city: "State",
  country: "Iran",
  mainStreet: "Main Street",
  nationalCode: "000000000",
  plaque: "481008883",
  region: "Region",
  state: "city",
  unit: "104"
}

const refreshToken = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVuaXF1ZUNvZGUiOiI1MjRiYWIzZi0zMTBiLTQxZmQtOGFkMC1jYjRlNGE5ZTZlNDcifSwiaWF0IjoxNTgxNTcwNzI1fQ.keC6V6ZV7luKgGQx2Cx47ajiwZZ3pW_YgP4P5iebLdM";
const token = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVkYzZhNDU5NWE3YmQzYTY5ZGZmN2U4MiIsInJvbGUiOiJjbGllbnQiLCJmaXJzdE5hbWUiOiJtZWhkaSIsImxhc3ROYW1lIjoibW9oc2VuaSBuYXNhYiIsIm1vYmlsZSI6IjA5MTI1NTUxMDEwIiwiZW1haWwiOiJtYXJzaGFsXzE5NjBAeWFob28uY29tIiwiaXNQZXJzb25hbCI6dHJ1ZSwidG9rZW5DcmVhdGlvbkRhdGUiOjE1ODE1NzA3MjUwNzR9LCJpYXQiOjE1ODE1NzA3MjUsImV4cCI6MTU4MTY1NzEyNX0.LuKaAJxvBcbQHfAVnlcFeBt5wrUa5DQ-MTS-9oKV5NY";

//##############################################################################
// log in request
//##############################################################################

export const baseServices = {
  login,
  logout,
  register,
  loginWithToken,
};

//##############################################################################
// add new transaction
//##############################################################################

function login(data) {
  return axios({
    url: `${API}/api/v1/login/`,
    headers: { "content-type": "application/json" },
    method: "POST",
    data: data
  })
  .then(response => {
    return {user, refreshToken, token};
  })
  .catch(function(err) {
    return {user, refreshToken, token};
    // return Promise.reject(err.response);
  });
}

//##############################################################################
// add new transaction
//##############################################################################

function logout() {
  return axios({
    url: `${API}/api/v1/logout/`,
    method: "POST",
    headers: { 
      "content-type": "application/json",
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem("access"))}`,
    },
    data: {refresh: JSON.parse(localStorage.getItem("refresh"))},
  })
  .then(response => {
    return response.data;
  })
  .catch(function(err) {
    return Promise.reject(err.response);
  });
}

//##############################################################################
// login with token
//##############################################################################

function loginWithToken() {
    return axios({
    url: `${API}/api/v1/login/refresh/`,
    method: "POST",
    headers: { 
      "content-type": "application/json",
    },
    data: {refresh: JSON.parse(localStorage.getItem("refresh"))},
  })
  .then(response => {
    if(user){
      localStorage.setItem("token", JSON.stringify(token));
      return {user, token};
    }
    else
      return Promise.reject(response.data);
  })
  .catch(function(error) {
    return Promise.reject(error.response);
  });
}

//##############################################################################
// add new transaction
//##############################################################################

function register(rawData) {

  const data = appendDataToFormData(rawData)
  return axios({
    url: `${API}/api/v1/register/`,
    method: "POST",
    headers: { "content-type": 'multipart/form-data' },
    data
  })
    .then(response => {
      return response.data;
    })
    .catch(function(err) {
      return Promise.reject(err.response);
    });
}