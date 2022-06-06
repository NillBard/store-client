import NavBar from "../components/NavBar";
import "../styles/globals.css";
import { useEffect } from "react";
import { $user, setUser } from "../store/UserStore";
import { Provider } from "effector-react/scope";
import { fork, serialize } from "effector";
import { $deviceList } from "../store/DeviceStore";
import { useEvent } from "effector-react";
import Layout from "../components/Layout";

let clientScope;

function MyApp({ Component, pageProps }) {
  const scope = fork({
    values: {
      ...(clientScope && serialize(clientScope)),
      ...pageProps.initialState,
    },
  });

  if (typeof window !== "undefined") clientScope = scope;
  console.log("scope", serialize(scope));

  return (
    <Provider value={scope}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
