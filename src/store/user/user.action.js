import { createAction } from "@reduxjs/toolkit";
import { USER_ACTION_TYPES } from "./user.types";


export const checkUserSession = createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START);

export const signInSuccess = createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS);

export const signInFailed = createAction(USER_ACTION_TYPES.SIGN_IN_FAILED);

export const signUpStart = createAction(USER_ACTION_TYPES.SIGN_UP_START);

export const signUpSuccess = createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS);

export const signUpFailed = createAction(USER_ACTION_TYPES.SIGN_UP_FAILED);

export const signOutStart = createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED);