import '../styles/globals.css'
import Navbar from './Navbar';

function MyApp({ Component, pageProps }) {
  return( 
    <>
  <Component {...pageProps} />
    </>
  )
}
export default MyApp;