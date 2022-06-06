import { useStore } from "effector-react";
import { useState } from "react";
import { addNewDevice } from "./api/deviceApi";
import { checkDeviceList, setDeviceList } from "../store/DeviceStore";
import { useEffect } from "react";

export default function Admin() {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const add = async () => {
    if ((name, img, description, price)) {
      const data = await addNewDevice(name, img, description, +price);
      setDeviceList(data);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-3/4 w-1/3 mx-auto flex flex-col items-center justify-around border-4 border-violet-900 rounded-xl shadow-lg p-3">
        <h1 className="text-4xl mt-2 font-mono font-bold text-violet-900">
          Admin Panel
        </h1>
        <input
          className="w-4/5 border-2 rounded-xl border-violet-900 text-center outline-none font-mono font-medium text-lg"
          placeholder="Enter device's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <input
          className="w-4/5 border-2 rounded-xl border-violet-900 text-center outline-none font-mono font-medium text-lg"
          placeholder="Enter device's image"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        ></input>
        <input
          type="number"
          className="w-4/5 border-2 rounded-xl border-violet-900 text-center outline-none font-mono font-medium text-lg"
          placeholder="Enter device's price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>

        <textarea
          className="w-4/5 h-1/5 border-2 rounded-xl border-violet-900 text-center outline-none font-mono font-medium text-lg"
          placeholder="Enter device's description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="w-1/3 p-2 bg-violet-900 rounded-md" onClick={add}>
          <span className="text-lg font-mono font-semibold text-slate-50">
            Add New
          </span>
        </button>
      </div>
    </div>
  );
}
