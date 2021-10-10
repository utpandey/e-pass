import axios from "../../utils/axios";
import {
  IUserProfile,
  IUserProfileUpdate,
  IUserProfileCreate,
} from "../../interfaces";
import { store } from "../../store/store";
import { LOGIN } from "../../store/reducers/auth";
import Router from "next/router";

function authHeaders(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export const userApi = {
  async logInGetToken(username: string, password: string) {
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("password", password);
    axios
      .post("/api/v1/login/access-token", params)
      .then((res) => {
        if (res && res.data) {
          Router.replace("/admin");
          store.dispatch(LOGIN(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
        // store.dispatch(EMAILERROR({ isErrors: true, errorMessage: err.name }));
        // store.dispatch(PASSERROR({ isErrors: true, errorMessage: err.name }));
      });
  },
  async getMe(token: string) {
    return axios.get<IUserProfile>(`/api/v1/users/me`, authHeaders(token));
  },
  async updateMe(token: string, data: IUserProfileUpdate) {
    return axios.put<IUserProfile>(
      `/api/v1/users/me`,
      data,
      authHeaders(token)
    );
  },
  async getUsers(token: string) {
    return axios.get<IUserProfile[]>(`/api/v1/users/`, authHeaders(token));
  },
  async updateUser(token: string, userId: number, data: IUserProfileUpdate) {
    return axios.put(`/api/v1/users/${userId}`, data, authHeaders(token));
  },
  async createUser(token: string, data: IUserProfileCreate) {
    return axios.post(`/api/v1/users/`, data, authHeaders(token));
  },
  async passwordRecovery(email: string) {
    return axios.post(`/api/v1/password-recovery/${email}`);
  },
  async resetPassword(password: string, token: string) {
    return axios.post(`/api/v1/reset-password/`, {
      new_password: password,
      token,
    });
  },
};
