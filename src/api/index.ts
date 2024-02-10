// import axios from "axios";

// const client = axios.create({
//   baseURL: "https://c564-195-158-30-249.ngrok-free.app/",
// });

// client.interceptors.request.use(function (config) {
//   config.headers["Content-Type"] = "application/json";
//   config.headers.Authorization =
//     localStorage.getItem("token") || undefined;

//   return config;
// });

// export default client;

import axios from "axios";

const client = axios.create({
  baseURL: "https://medcrm.bsite.net",
});

client.interceptors.request.use(function (config) {
  config.headers["Content-Type"] = "application/json";
  
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default client;