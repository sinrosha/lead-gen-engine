import React, {useState, useEffect} from "react"
import Meta from "../Meta"
import Header from '../Header'
import { useCookies } from "react-cookie";

const Layout = ({content, children}) => {

  const [cookies, setCookie, removeCookie] = useCookies(["visitor_info"]);

  useEffect(() => {
    if(!cookies.visitor_info){
      fetch("https://ipinfo.io/json?token=36b069382aeb35")
      .then( res => res.json())
      .then( res => {
        const {city, country, hostname, ip, org, postal, region, timezone, loc} = res;
        setCookie("visitor_info", JSON.stringify(res),{path:"/"});
        window.dataLayer.push({
          event: "newUser",
          data: {
            city,
            country,
            hostname,
            ip,
            loc,
            org,
            postal,
            region,
            timezone
          }
        })
      })
    }
  }, []);

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
        {/* <footer>Footer</footer> */}
      </div>
    </>
  )
}

export default Layout;