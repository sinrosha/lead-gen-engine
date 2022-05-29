import Layout from "../components/Layout"
import HomeHero from "../components/HomeHero"
import Testimonial from "../components/Testimonail"
import BrandSlider from "../components/BrandSlider"
import content from "../content/home.json"
import FAQ from "../components/FAQ"
import FloatingCTA from "../components/FloatingCTA"
import GetInTouch from "../components/GetInTouch/Index"
import Featurelist from "../components/Featurelist"
import Stats from "../components/Stats"

const Home = () => {
  const testimonialContent = [
    {
      id: 1,
      img: "/testimonial.jpeg",
      text: "I am really happy to see a platform which can be super-personalised to do an outreach and then the number of quality responses coming back. Its a platform which can really do best quality sourcing and makes it simple to close senior leadership tech-hires in no time",
      name: "Saurabh Gupta",
      designation: "CEO, UrbanPiper"
    },
    {
      id: 2,
      img: "/testimonial.jpeg",
      text: "I am really happy to see a platform which can be super-personalised to do an outreach and then the number of quality responses coming back. Its a platform which can really do best quality sourcing and makes it simple to close senior leadership tech-hires in no time",
      name: "Pryce Adade-Yebesi",
      designation: "Co-Founder, Utopia Labs"
    },
    {
      id: 3,
      img: "/testimonial.jpeg",
      text: "I am really happy to see a platform which can be super-personalised to do an outreach and then the number of quality responses coming back. Its a platform which can really do best quality sourcing and makes it simple to close senior leadership tech-hires in no time",
      name: "Srijan Shetty",
      designation: "CTO, FanStan"
    },
    {
      id: 4,
      img: "/testimonial.jpeg",
      text: "I am really happy to see a platform which can be super-personalised to do an outreach and then the number of quality responses coming back. Its a platform which can really do best quality sourcing and makes it simple to close senior leadership tech-hires in no time",
      name: "Harsh",
      designation: "Founder, Homework App"
    }
  ];
  const brands = [
    {
      id: 1,
      name: "Sony",
      src: "/logos/sony-logo.png"
    },
     {
       id: 2,
       name: "Samsung",
       src: "/logos/samsung-logo.png"
     },
    {
      id: 3,
      name: "Philips",
      src: "/logos/philips-logo.png"
    },
    {
      id: 4,
      name: "Panasonic",
      src: "/logos/panasonic-logo.png"
    },
    {
      id: 5,
      name: "Micromax",
      src: "/logos/micromax-logo.png"
    },
    {
      id: 6,
      name: "MI",
      src: "/logos/mi-logo.png"
    },{
      id: 7,
      name: "LG",
      src: "/logos/lg-logo.png"
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
  const features = [
    {
      id:1,
      para: "top job openings",
      img: "/one.png"
    },
    {
      id:2,
      para: "connected to founders",
      img: "/two.png"
    },
    {
      id:3,
      para: "Salary hike",
      img: "/three.png"
    },
    {
      id:4,
      para: "career advice",
      img: "/four.png"
    }
  ]

  const stats = [
    {
      id:1,
      para: "top job openings",
      img: "/num-one-logo.png",
      text: "2500+"
    },
    {
      id:2,
      para: "Positive Feedback",
      img: "/num-two.png",
      text:"3x"
    },
    {
      id:3,
      para: "Weekly Interviews",
      img: "/num-three-logo.png",
      text: "93%"
    },
    {
      id:4,
      para: "scouts as of now ",
      img: "/num-four.png",
      text: "150k+"
    }
  ]
  
  return (
    <Layout content={content}>
      <HomeHero />
      <BrandSlider brands={brands}/>
      <Testimonial testimonials={testimonialContent} />
      <Featurelist features={features}/>
      <Stats stats={stats}/>
      <FAQ FAQS={faqs}/>
      <GetInTouch />
      <FloatingCTA />
    </Layout>
  )
}

export default Home;


