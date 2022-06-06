import { useEvent } from "effector-react";
import { useEffect } from "react";
import { authFx } from "../store/UserStore";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  const auth = useEvent(authFx);

  useEffect(async () => {
    await auth();
  }, []);

  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
