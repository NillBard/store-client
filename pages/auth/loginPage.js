import { useEvent, useStore } from "effector-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { $user, loginFx, setIsAuth, setUser } from "../../store/UserStore";

import { useRouter } from "next/router";

const LoginPage = () => {
  const user = useStore($user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const login = useEvent(loginFx);

  const click = async () => {
    if (email !== "" && password !== "") await login({ email, password });
  };

  useEffect(() => {
    console.log(user.isAuth);
    if (user.isAuth) {
      router.push("/shop");
    }
  }, [user]);

  return (
    <div className="w-1/2 h-screen flex justify-center items-center mx-auto ">
      <div className=" w-2/3 h-3/5 justify-around items-center flex flex-col border-4 border-violet-900 rounded-md p-4 shadow-2xl">
        <h1 className="text-4xl mt-2 font-mono font-bold text-violet-900">
          Login
        </h1>

        <input
          className="w-4/5 border-b-2 border-violet-900 text-center outline-none font-mono font-medium text-lg"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="w-4/5 border-b-2 border-violet-900 text-center outline-none font-mono font-medium text-lg"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <h1 className="text-xl mt-2 font-mono font-semibold ">
          Don't have an{" "}
          <Link href="/auth/registrationPage">
            <a className="text-xl mt-2 font-mono font-bold text-violet-900">
              Account
            </a>
          </Link>
          ?
        </h1>
        <button className="w-1/3 p-2 bg-violet-900 rounded-md" onClick={click}>
          <span className="text-lg font-mono font-semibold text-slate-50">
            Sign In
          </span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
