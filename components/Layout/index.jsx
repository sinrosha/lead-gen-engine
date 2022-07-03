import React, {useState, useEffect} from "react"
import Meta from "../Meta"
import Header from '../Header'
import Footer from "../Footer"

const Layout = ({content, children}) => {

  return (
    <>
      <Meta content={content} />
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WBK5B7B"
      height="0" width="0" style={{display: "none", "visibility": "hidden"}}></iframe></noscript>
      <div className="siteWrapper mx-auto">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout;