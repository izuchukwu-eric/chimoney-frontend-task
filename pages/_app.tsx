import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
import store from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>
        <Component {...pageProps} />
        <ToastContainer />
      </PersistGate>
    </Provider>
  )
}
