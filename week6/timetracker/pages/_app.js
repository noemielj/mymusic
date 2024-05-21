import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import activities from '../reducers/activities';


const store = configureStore({
  reducer: { activities },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Time tracker</title>
      </Head>
      <Component {...pageProps} />
      </Provider>
  );
}

export default App;
