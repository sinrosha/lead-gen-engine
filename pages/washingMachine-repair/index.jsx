import React from "react";
import HomeHero from "../../components/HomeHero";
import Layout from "../../components/Layout";
import Testimonial from "../../components/Testimonail";
import content from "../../content/home.json";
import FeaturelistWash from "../../components/FeaturelistWash";
const Washing = () => {
  const testimonialContent = [
    {
      id: 1,
      img: "/adhiraj-img.jpg",
      text: "This service center is very helpful for me. I am 100% satisfied with their positive results. Thanks to all the team members of Handyman services.",
      name: "Adhiraj Singh",
      designation: "Software engineer, Giift India Pvt Ltd",
    },
    {
      id: 2,
      img: "/shanu-img.jpg",
      text: "This center is very coordinating and quite helpful.They ensure 100% compliance.Best wishes to all the employees.",
      name: "Shanu Sharma",
      designation: "QA engineer, Infosys",
    },
    {
      id: 3,
      img: "/farhan-img.jpg",
      text: "Great service..!!! No worries of any sort ..or of any type of TV...all sort of TV repairs available...",
      name: "Farhan Khan",
      designation: "Youtuber",
    },
    {
      id: 4,
      img: "/kolte-img.jpg",
      text: "They were really fast. They sent the technician within 1 hour of my booking. He picked the TV, got the screen replaced and delivered it back the same day.",
      name: "Ajinkya kolte",
      designation: "Network Architect, KPMG",
    },
  ];
  const brands = [
    {
      id: 1,
      name: "Sony",
      src: "/logos/tv.svg",
      text: "TV <br/> Repair",
      link: "/tv-repair",
    },
    {
      id: 2,
      name: "Samsung",
      src: "/logos/wash.svg",
      text: `Washing Machine <br/> Repair`,
      link: "#",
    },
    {
      id: 3,
      name: "Philips",
      src: "/logos/ac.svg",
      text: "Air conditioner <br/> repair",
      link: "",
    },
    {
      id: 4,
      name: "Panasonic",
      src: "/logos/fridge.svg",
      text: "Fridge <br/> repair",
      link: "",
    },
  ];
  const logo = [
    {
      id: 1,
      name: "Sony",
      src: "/logos/sony-logo.png",
    },
    {
      id: 2,
      name: "Panasonic",
      src: "/logos/panasonic-logo.png",
    },
    {
      id: 3,
      name: "Samsung",
      src: "/logos/samsung-logo.png",
    },
    {
      id: 4,
      name: "Mi",
      src: "/logos/mi-logo.png",
    },
    {
      id: 5,
      name: "Micromax",
      src: "/logos/micromax-logo.png",
    },
    {
      id: 6,
      name: "Philips",
      src: "/logos/philips-logo.png",
    },
    {
      id: 7,
      name: "Lg",
      src: "/logos/lg-logo.png",
    },
  ];

  const features = [
    {
      id: 1,
      para: "Sameday service",
      img: "/one.png",
    },
    {
      id: 2,
      para: "1 year guarantee service",
      img: "/two.png",
    },
    {
      id: 3,
      para: "Zero Visiting Charge",
      img: "/three.png",
    },
    {
      id: 4,
      para: "Highly skilled technician",
      img: "/four.png",
    },
  ];

  const hero = [
    {
      title: "Washing machine Repair",
      subTitle:
        "We Repair Washing Machine of all types and of all brands. We provide same day service.",
    },
  ];
  return (
    <Layout content={content}>
      <HomeHero hero={hero} />
      <Testimonial testimonials={testimonialContent} />
      <FeaturelistWash features={features} />
    </Layout>
  );
};

export default Washing;
