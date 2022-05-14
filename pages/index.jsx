import Layout from "../components/Layout"
import HomeHero from "../components/HomeHero"
import content from "../content/home.json"

const Home = () => {
  return (
    <Layout content={content}>
      <HomeHero />
    </Layout>
  )
}

export default Home;