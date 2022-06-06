import {
  createDomain,
  createEffect,
  createEvent,
  createStore,
  Domain,
  fork,
  serialize,
  hydrate,
  forward,
} from "effector";
import {
  addInCart,
  getAll,
  getCartList,
  getOne,
  incDeviceCount,
} from "../pages/api/deviceApi";
import { setUser } from "./UserStore";

export const setDeviceList = createEvent();
export const clearDevcieList = createEvent();
export const checkDeviceList = createEffect(getAll);
export const getDevice = createEffect(async (id) => await getOne(id));
export const check = createEffect(async () => {
  const data = await checkDeviceList();
  return data;
});
export const incCountFx = createEffect(
  async ({ user, id }) => await incDeviceCount({ user, id })
);

export const getCart = createEffect(getCartList);
export const setCart = createEffect(
  async ({ id, user }) => await addInCart({ id, user })
);

export const $deviceList = createStore([])
  .on(setDeviceList, (state, device) => [...state, device])
  .on(getDevice.doneData, (state, device) => [...state, device])
  .on(checkDeviceList.doneData, (state, deviceList) => [
    ...state,
    ...deviceList,
  ])
  .reset(clearDevcieList);

$deviceList.watch((device) => console.log(device));
// forward({ from: incCountFx.doneData, to: [clearDevcieList, setDeviceList] });

export const $cart = createStore([])
  .on(getCart.doneData, (state, device) => [...state, device])
  .on(setCart.doneData, (state, device) => [...state, device]);

$cart.watch((device) => console.log(device));
