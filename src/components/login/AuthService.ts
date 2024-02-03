import axios from "axios";

const API_URL = "http://localhost:4000/auth/login";


export const login =(username, password)=> {
     axios
      .post(API_URL, {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }