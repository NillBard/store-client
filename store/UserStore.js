import { createEffect, createEvent, createStore, forward } from "effector";
import { auth, login, registration } from "../pages/api/userApi";

export const setUser = createEvent();
export const authFx = createEffect(auth);
export const exitFx = createEffect(() => localStorage.removeItem("token"));
export const loginFx = createEffect(login);
export const regFx = createEffect(registration);

export const $user = createStore({ isAuth: false, user: null })
  .on(setUser, (state, user) => ({ ...state, user, isAuth: !!user }))
  .reset(exitFx.doneData);

forward({ from: loginFx.doneData, to: setUser });
forward({ from: regFx.doneData, to: setUser });
forward({ from: authFx.doneData, to: setUser });

$user.watch(($user) => console.log(`${$user.isAuth} : ${$user.user} `));
