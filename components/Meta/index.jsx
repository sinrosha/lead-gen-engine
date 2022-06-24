import Head from 'next/head'
import Script from 'next/script'

const Meta = ({content}) => {
  const {meta} = content;
  return (
    <>
    <Head>
      <title>{meta.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content={meta.description} />
      <meta name="google-site-verification" content="ysIiE1C38NHqy154CafLy0lT29gKc71yw2UnaqqKanI" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="google-site-verification" content="" />
      <link rel="canonical" href={meta.canonical} />
      <meta name="referrer" content="origin" />

      <meta itemProp="name" content={meta.title} />
      <meta itemProp="description" content={meta.description} />
      <meta itemProp="image" content={meta.ogImage} />
      <meta property="og:image:type" content="image/png" />

      <meta property="og:url" content="https://handymanservices.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.ogImage} />
      <meta property="og:image:alt" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:locale" content="en_US" />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Script
      id="1"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WBK5B7B')"
      }}
    />
    <Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-E5EB756ZQ3"></Script>
    <Script
      id="2"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)}gtag('js', new Date());gtag('config', 'G-E5EB756ZQ3', {'debug_mode':true })"
      }}
    />

    <Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-10936363112"></Script>
    <Script
      id="3"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: " window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-10936363112');"
      }}
    />

    <Script
      id="3"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: " gtag('event', 'conversion', {'send_to': 'AW-10936363112/orudCMz5yccDEOjQ7t4o','transaction_id': ''});"
      }}
    />
  </>
  )
}

export default Meta;
