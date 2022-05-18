import Meta from "../Meta"
import Header from '../Header'
const Layout = ({content, children}) => {
  return (
    <>
      <Meta content={content} />
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