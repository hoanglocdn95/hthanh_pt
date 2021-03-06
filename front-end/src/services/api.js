import axios from "axios";
const APIUrl = "http://localhost:3000/";

export const GET = (url, params, callBack) => {
  if (params.id) {
    return axios
      .get(`${APIUrl}${url}/${params.id}`, params.header)
      .then((result) => {
        callBack(result);
      })
      .catch((error) => console.log("GET -> error", error));
  }
  return axios
    .get(`${APIUrl}${url}`, params)
    .then((result) => {
      callBack(result);
    })
    .catch((error) => console.log("GET -> error", error));
};

export const POST = (url, params, callBack) => {
  axios
    .post(`${APIUrl}${url}`, params)
    .then((result) => callBack(result))
    .catch((error) => console.log("POST -> error", error));
};

export const PATCH = (url, params) => {
  axios
    .patch(`${APIUrl}${url}`, params)
    .then((result) => {
      console.log("PATCH -> result", result);
    })
    .catch((error) => console.log("PATCH -> error", error));
};

export const DELETE = (url, params) => {
  axios
    .delete(`${APIUrl}${url}`, params)
    .then((result) => {
      console.log("DELETE -> result", result);
    })
    .catch((error) => console.log("DELETE -> error", error));
};
