import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

type userState = {
  email: string,
  forgotPassword: boolean
};

const initialState: userState = {
  email: '',
  forgotPassword: false
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserEmail(state, { payload }: PayloadAction<string>){
      return {...state, email: payload};
    },
    changeForgotPassword(state, { payload }: PayloadAction<string>){
      return {email: payload, forgotPassword: true};
    }
  }

});

export const { changeUserEmail, changeForgotPassword } = slice.actions;
export const selectUser = (state: RootState) => state.user;
export default slice.reducer;