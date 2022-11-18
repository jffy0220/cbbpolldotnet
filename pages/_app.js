//import '../styles/globals.css'
import '../styles/style.css'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }) {
  console.log('pageProps:', pageProps);
  return <Component {...pageProps} />
}

export default MyApp
