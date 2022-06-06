import { useList } from "effector-react";

import { $deviceList, check } from "../store/DeviceStore";

import { allSettled, fork, serialize } from "effector";

import Link from "next/link";

export default function Shop() {
  return (
    <div className="mx-auto w-4/5 max-h-screen grid grid-rows-full grid-flow-col gap-2 mt-8">
      <div className="row-span-6 flex flex-col items-center border-2 border-gray-500 shadow-md rounded-md p-5">
        Table
      </div>
      <div className="col-span-3 border-2">Form</div>
      <div className="col-span-3 row-span-5 grid grid-cols-5 gap-5 p-5 ">
        {useList($deviceList, {
          getKey: ({ id }) => id,
          fn: ({ name, price, img, id }) => (
            <div className="flex flex-col items-center justify-center h-full w-full border-2 border-gray-600 shadow-lg">
              <img src={img} className="object-cover h-5/6 w-5/6"></img>
              <Link href={`/device/${id}`}>
                <a>
                  {name} {price}
                </a>
              </Link>
            </div>
          ),
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async ({}) => {
  const scope = fork();
  await allSettled(check, { scope });
  return {
    props: {
      initialState: serialize(scope),
    },
  };
};
