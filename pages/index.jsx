import Layout from "../components/Layout"
import HomeHero from "../components/HomeHero"
import Testimonial from "../components/Testimonail"
import content from "../content/home.json"
import FAQ from "../components/FAQ"

const Home = () => {
  return (
    <Layout content={content}>
      <HomeHero />
      <Testimonial />
    </Layout>
  )
}

export default Home;