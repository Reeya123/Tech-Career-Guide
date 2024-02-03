import { RootState } from "../../store";

const sliceName = "login"

export const selectUsername = (state: RootState) => state[sliceName].name;

export const selectUseremail = (state: RootState) => state[sliceName].email;

export const selectUserpassword = (state: RootState) => state[sliceName].password;

export const selectUseraccesstoken = (state: RootState) => state[sliceName].accessToken;

export const selectIslogin = (state: RootState) => state[sliceName].islogin;
