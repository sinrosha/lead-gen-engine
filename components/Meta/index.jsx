import Head from 'next/head'

const Meta = ({content}) => {
  const {meta} = content;
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content={content.description} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="google-site-verification" content="" />
      <link rel="canonical" href={meta.canonical} />
      <meta name="referrer" content="origin" />

      <meta itemprop="name" content={meta.title} />
      <meta itemprop="description" content={meta.description} />
      <meta itemprop="image" content={meta.ogImage} />

      <meta property="og:url" content="https://www.singhroshan.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.ogImage} />
      <meta property="og:image:alt" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:locale" content="en_US" />

    </Head>
  )
}

export default Meta;