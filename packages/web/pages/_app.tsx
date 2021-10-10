import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import Layout from "../components/Layout";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <div className="loader__cont">
            <div className="clock-loader"/>
          </div>
        }
        persistor={persistor}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
export default MyApp;
