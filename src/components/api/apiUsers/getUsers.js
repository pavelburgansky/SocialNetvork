import React from "react";
import axios from "axios";
export const getUsers = (pageNumber, pagesize) => {
  return axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pagesize}`,
      { withCredentials: true }
    )
    .then((response) => response.data);
};
