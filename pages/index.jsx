import Layout from "../components/Layout"
import HomeHero from "../components/HomeHero"
import Testimonial from "../components/Testimonail"
import BrandSlider from "../components/BrandSlider"
import content from "../content/home.json"

const Home = () => {
  const testimonialContent = [
    {
      id: 1,
      img: "https://uploads-ssl.webflow.com/60809af553239c9ff8d2468b/6255b748ae1f13ef925fb0a6_1620387055511.jpeg",
      text: "I am really happy to see a platform which can be super-personalised to do an outreach and then the number of quality responses coming back. Its a platform which can really do best quality sourcing and makes it simple to close senior leadership tech-hires in no time",
      name: "Saurabh Gupta",
      designation: "CEO, UrbanPiper"
    },
    {
      id: 2,
      img: "https://uploads-ssl.webflow.com/60809af553239c9ff8d2468b/6255d050f56b43c47d8daca5_1632862372779.jpeg",
      text: "I am really happy to see a platform which can be super-personalised to do an outreach and then the number of quality responses coming back. Its a platform which can really do best quality sourcing and makes it simple to close senior leadership tech-hires in no time",
      name: "Pryce Adade-Yebesi",
      designation: "Co-Founder, Utopia Labs"
    },
    {
      id: 3,
      img: "https://uploads-ssl.webflow.com/60809af553239c9ff8d2468b/6255b74263b08d81d7625d8c_1565075801871.jpeg",
      text: "I am really happy to see a platform which can be super-personalised to do an outreach and then the number of quality responses coming back. Its a platform which can really do best quality sourcing and makes it simple to close senior leadership tech-hires in no time",
      name: "Srijan Shetty",
      designation: "CTO, FanStan"
    },
    {
      id: 4,
      img: "https://uploads-ssl.webflow.com/60809af553239c9ff8d2468b/627cafba3bd1ef2a1a191629_1517777060376.jpeg",
      text: "I am really happy to see a platform which can be super-personalised to do an outreach and then the number of quality responses coming back. Its a platform which can really do best quality sourcing and makes it simple to close senior leadership tech-hires in no time",
      name: "Harsh",
      designation: "Founder, Homework App"
    }
  ];
  const brands = [
    {
      id: 1,
      name: "Openbase",
      src: "https://openbase.com/_next/image?url=%2Fpngs%2Fopenbase-logo.v3.png&w=640&q=75"
    },
    {
      id: 2,
      name: "Openbase",
      src: "https://openbase.com/_next/image?url=%2Fpngs%2Fopenbase-logo.v3.png&w=640&q=75"
    },
    {
      id: 3,
      name: "Openbase",
      src: "https://openbase.com/_next/image?url=%2Fpngs%2Fopenbase-logo.v3.png&w=640&q=75"
    },
    {
      id: 4,
      name: "Openbase",
      src: "https://openbase.com/_next/image?url=%2Fpngs%2Fopenbase-logo.v3.png&w=640&q=75"
    },
    {
      id: 5,
      name: "Openbase",
      src: "https://openbase.com/_next/image?url=%2Fpngs%2Fopenbase-logo.v3.png&w=640&q=75"
    },
    {
      id: 6,
      name: "Openbase",
      src: "https://openbase.com/_next/image?url=%2Fpngs%2Fopenbase-logo.v3.png&w=640&q=75"
    },{
      id: 7,
      name: "Openbase",
      src: "https://openbase.com/_next/image?url=%2Fpngs%2Fopenbase-logo.v3.png&w=640&q=75"
    }
  ]
  return (
    <Layout content={content}>
      <BrandSlider brands={brands}/>
      <Testimonial testimonials={testimonialContent}/>
    </Layout>
  )
}

export default Home;