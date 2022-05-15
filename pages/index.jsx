import Layout from "../components/Layout"
import HomeHero from "../components/HomeHero"
import Testimonial from "../components/Testimonail"
import BrandSlider from "../components/BrandSlider"
import content from "../content/home.json"
import FAQ from "../components/FAQ"

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
  const faqs = [
    { id:1,
      question: "How do you recommend someone to Weekday for jobs ?",
      answer:" The Chrome extension works in tandem with your LinkedIn profile. You will be given a choice of your connections to choose from to recommend to Weekday. Based on the number of recommendations, you will earn rewards."
    },
    {
      id:2,
      question: "What if I want to recommend people but don't want to install the Chrome extension ?",
      answer:"Sure. You can this form to send us recommendations "

   },
   {  id:3,
      question: "Which are the companies my recommended people get suggested ?",
      answer:"Weekday currently works with over 90 companies from across the globe. Most of them are VC-backed high growth startups."

   },
   {  id:4,
      question: "How does the rewards system work at Weekday ?",
      answer:"There are 3 levels to the rewards system.Just for referring people When you are using the extension to refer your friends, you will be prompted if you want to make your LinkedIn connections available for outreach, and also make a selection to refer from your list of connections. You will be rewarded separately to make your LinkedIn connections available and also for each candidate you refer.When they interview. Once your referrals have been contacted by Weekday, if they are looking for jobs, they will begin giving interviews with the companies that we are currently working with."

   },
   {  id:5,
      question: "Which are the companies my recommended people get suggested ?",
      answer:" Rewards are given when each referral has the first interview scheduled.When they get hired: When a referral finds a job through Weekday, you will receive an email notifying you that your referral has been hired and will ask you to share your bank details for money transfer. Once the referral joins the company, payment will be disbursed (25% at the time of joining and rest after 3 months of staying)."
   }  
  ]

  return (
    <Layout content={content}>
      <BrandSlider brands={brands}/>
      <Testimonial testimonials={testimonialContent} />
      <FAQ FAQS={faqs}/>
    </Layout>
  )
}

export default Home;


