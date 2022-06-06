import { allSettled, fork, scopeBind, serialize } from "effector";
import { useList, useStore } from "effector-react";
import { useEvent } from "effector-react";

import {
  $deviceList,
  getDevice,
  incCountFx,
  setCart,
} from "../../store/DeviceStore";
import { $user } from "../../store/UserStore";

export default function DevicesPage() {
  const [addCart, inc] = useEvent([setCart, incCountFx]);
  const user = useStore($user).user;
  console.log(user);

  const addDeviceInCart = async (id) => {
    await addCart({ id, user });
  };

  return (
    <div className="w-4/5 h-[calc(100vh-48px)] mx-auto ">
      {useList($deviceList, {
        getKey: ({ id }) => id,
        fn: ({ name, price, img, id, countInCart }) => (
          <div className="flex h-5/6 flex-row items-center justify-around ">
            <img src={img} className="object-cover h-4/6 w-2/6 shadow-lg"></img>
            <div className="border-2 border-violet-900 rounded-xl w-2/6 h-3/6 flex flex-col text-center items-center justify-around">
              <h1 className="text-3xl font-semibold font-mono">{name}</h1>
              <h1>{price} р</h1>
              <button
                className="bg-violet-900 p-3 rounded-md w-5/6 text-2xl text-white font-mono"
                onClick={async () => await addDeviceInCart(id)}
              >
                Add cart
              </button>
              <div>
                <button
                  onClick={async () => await inc({ user, id })}
                  className="bg-violet-900 p-3 rounded-md w-5/6 text-2xl text-white font-mono"
                >
                  +
                </button>
                {countInCart}
              </div>
            </div>
          </div>
        ),
      })}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const scope = fork();
  await allSettled(getDevice, { scope, params: context.params.id });
  return {
    props: {
      initialState: serialize(scope),
    },
  };
};
