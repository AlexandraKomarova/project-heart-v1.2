import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import App from "next/app";

// class MyApp extends App {
//   render() {
//     const { Component, pageProps, router } = this.props;

//     return (
//       <AnimatePresence exitBeforeEnter>
//         <Component {...pageProps} key={router.route} />;
//       </AnimatePresence>
//     )
//   }
// }

 // export default MyApp;

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
  )
}

export default MyApp

