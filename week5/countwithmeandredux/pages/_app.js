import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counter from '../reducers/counter';

const store = configureStore({
  reducer: { counter },
 });

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>count with me </title>
      </Head>
      <Component {...pageProps} />
      </Provider>
  );
}

export default App;
