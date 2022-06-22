import LottieAnimation from "../components/LottieAnimation";
import errorJson from "../content/404.json"
import Head from 'next/head'

const NotFound = () => {  
  return (
    <>
      <Head>
        <title>404 | Page Not Found</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <LottieAnimation animationJson={errorJson}/>
    </>
  )
}

export default NotFound;