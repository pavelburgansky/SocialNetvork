import React from "react";
import axios from "axios";
export const unfollowUser = (id) => {
  return axios
    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
      withCredentials: true,
      headers: { "API-KEY": "03639148-a250-47d2-8b64-d5eb439d20f4" },
    })
    .then((response) => response.data);
};
