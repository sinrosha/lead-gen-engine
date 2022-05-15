import Layout from "../components/Layout"
import HomeHero from "../components/HomeHero"
import content from "../content/home.json"
import FAQ from "../components/FAQ"
import Testimonial from "../components/Testimonail"

const Home = () => {
  return (
    <Layout content={content}>
      <HomeHero />
      <Testimonial/>
      <FAQ />
    </Layout>
  )
}

export default Home;