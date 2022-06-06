import { useEvent, useStore } from "effector-react";
import Link from "next/link";
import { useEffect } from "react";
import { $user, authFx, exitFx, setUser } from "../store/UserStore";

const NavBar = () => {
  const isLogin = useStore($user);
  const [setCurrentUser, exit] = useEvent([setUser, exitFx]);

  return (
    <div className="w-full bg-violet-900 h-12 items-center flex flex-row  justify-between ">
      <Link href="/shop">
        <a className="text-slate-50 font-semibold font-mono text-3xl ml-8">
          My Store
        </a>
      </Link>
      {!isLogin.isAuth ? (
        <Link href="/auth/loginPage">
          <a className="border-2 rounded-md text-base text-slate-50 p-1 mr-8">
            SignIn
          </a>
        </Link>
      ) : (
        <div className=" flex w-1/6 flex-row justify-around items-center mr-8">
          <Link href="/adminPanel">
            <a className="border-2 rounded-md text-base text-slate-50 p-1">
              Admin Panel
            </a>
          </Link>
          <Link href="/cartPage">
            <a className="border-2 rounded-md text-base text-slate-50 p-1">
              Cart
            </a>
          </Link>
          <button onClick={exit}>Exit</button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
