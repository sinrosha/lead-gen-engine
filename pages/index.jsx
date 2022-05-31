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
      img: "/adhiraj-img.jpg",
      text: "This service center is very helpful for me. I am 100% satisfied with their positive results. Thanks to all the team members of Handyman services.",
      name: "Adhiraj Singh",
      designation: "Software engineer, Giift India Pvt Ltd"
    },
    {
      id: 2,
      img: "/shanu-img.jpg",
      text: "This center is very coordinating and quite helpful.They ensure 100% compliance.Best wishes to all the employees.",
      name: "Shanu Sharma",
      designation: "QA engineer, Infosys"
    },
    {
      id: 3,
      img: "/farhan-img.jpg",
      text: "Great service..!!! No worries of any sort ..or of any type of TV...all sort of TV reparis available...",
      name: "Farhan Khan",
      designation: "Youtuber"
    },
    {
      id: 4,
      img: "/kolte-img.jpg",
      text: "hey were really fast. They sent the technician within 1 hour of my booking. He picked the TV, got the screen replaced and delivered it back the same day.",
      name: "Ajinkya kolte",
      designation: "Network Architect, KPMG"
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
      question: "Are you factory trained and authorized to provide warranty and service contract repairs?",
      answer:" Yes, it’s very important that a factory authorized service center work on your appliance.  They have training and tech support available for all the up to date service bulletins software updates and product information on your appliance or television."
    },
    {
      id:2,
      question: "Can I expect a professional to come into my home?",
      answer:"All our technicians are fully trained and insured and have passed a yearly comprehensive background check, driving record and drug test. "

    },
    {  id:3,
      question: "What TV brands do you repair?",
      answer:" We repair all TV brands."

    },
    {  id:4,
      question: "How long does it take to repair a TV?",
      answer:"Most sets can be repaired by the next business day. It may take longer if we have to diagnose an uncommon problem (like problems caused by pests or power surges). The biggest factor in repair time is parts availability. If parts are not found in San Antonio, ground shipping from the most common distributors can take 4-5 business days."

    },
    {  id:5,
      question: "What form of payments to you accept?",
      answer:"We accept Cash, Checks and all major credit cards at time of service."
    }  
  ]
  const features = [
    {
      id:1,
      para: "Sameday service",
      img: "/one.png"
    },
    {
      id:2,
      para: "1 year guarantee service",
      img: "/two.png"
    },
    {
      id:3,
      para: "Rs 150 service charge",
      img: "/three.png"
    },
    {
      id:4,
      para: "Highly skilled technician",
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
      {/* <Stats stats={stats}/> */}
      <FAQ FAQS={faqs}/>
      <GetInTouch />
    </Layout>
  )
}

export default Home;


