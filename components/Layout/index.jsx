import Meta from "../Meta"
const Layout = ({content, children}) => {
  return (
    <>
      <Meta content={content} />
      <div className="siteWrapper mx-auto">
        {/* <header>header</header> */}
        <main>
          {children}
        </main>
        {/* <footer>Footer</footer> */}
      </div>
    </>
  )
}

export default Layout;