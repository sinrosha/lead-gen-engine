import React, {useState, useEffect} from "react"
import Meta from "../Meta"
import Header from '../Header'
import { useCookies } from "react-cookie";

const Layout = ({content, children}) => {

  const [cookies, setCookie, removeCookie] = useCookies(["visitor_info"]);

  const sentUserDataToSheet = (res) => {

    const {city, country, hostname, ip, org, postal, region, timezone, loc} = res;

    const scriptUrl = "https://script.google.com/macros/s/AKfycbwzOjgqhveT0OqGbWGB7SacN1AG3Jdwqt8gzqz4B_-iKkvjDr553H-w3ydFUfhfk1haIg/exec";

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("Date", new Date());
    urlencoded.append("City", city);
    urlencoded.append("Country", country);
    urlencoded.append("Hostname", hostname);
    urlencoded.append("IP", ip);
    urlencoded.append("Location", loc);
    urlencoded.append("Org", org);
    urlencoded.append("Postal", postal);
    urlencoded.append("Region", region);
    urlencoded.append("Timezone", timezone);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(scriptUrl, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

  const sendEventToGTM = (res) => {
    const {city, country, hostname, ip, org, postal, region, timezone, loc} = res;
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
  }

  useEffect(() => {
    if(!cookies.visitor_info){
      fetch("https://ipinfo.io/json?token=36b069382aeb35")
      .then( res => res.json())
      .then( res => {
        setCookie("visitor_info", JSON.stringify(res),{path:"/"});
        sendEventToGTM(res);
        sentUserDataToSheet(res);
      })
    } else {
      sentUserDataToSheet(cookies.visitor_info);
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