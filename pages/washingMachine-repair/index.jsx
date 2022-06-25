import React from "react";
import HomeHero from "../../components/HomeHero";
import Layout from "../../components/Layout";
import content from "../../content/home.json";
import FeaturelistWash from "../../components/FeaturelistWash";
const Washing = () => {
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
      link: "#",
    },
    {
      id: 4,
      name: "Panasonic",
      src: "/logos/fridge.svg",
      text: "Fridge <br/> repair",
      link: "#",
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
      para: "Rs 150 service charge",
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
      <FeaturelistWash features={features} />
    </Layout>
  );
};

export default Washing;
