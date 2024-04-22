// pages/ _app.js
import { AppProvider } from '../components/AppContext'; // Adjust the path if necessary

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
