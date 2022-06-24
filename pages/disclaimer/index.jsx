import Head from "next/head"
import Layout from "../../components/Layout"
import content from "../../content/disclaimer.json"

const Disclaimer = () => {
  return (
    <Layout content={content}>
      <div className="mx-auto w-10/12 md:w-4/5 my-14">
        <h1 className="text-center text-4xl font-bold font-sen mb-8">Disclaimer</h1>
        <p className="mb-4 text-lg">
          We are not authorised provider of any brand of any products mentioned in our website. Website is for advertising purpose only and nowhere we mentioned that we are a authorised center/ authorised provider.
        </p>
        <p className="mb-4 text-lg">
          We provide the electronics appliances repair and service thus information on this website may or may not be true and we make no warranty as to the validity of any type of claims. The information provided in this website is for
          general purposes only.
        </p>
        <p className="mb-4 text-lg">
          Logos, Brand Names, Images, Copyright symbols used in the website are property of the respective owners and we reserve no right for the same, if in case some one have any objection on the usage of their logo/images/trademarks in our
          website, please inform us at handymanservicespvt@gmail.com, we will be doing the needful within 24 hours of your information submission.
        </p>
        <p className="mb-4 text-lg">
          We are neither associated nor affiliated with any Companies Logos and Images are being used only for representation purpose of post-warranty repair and service. We are an independent organization. We are not authorized to the
          service centre.
        </p>
      </div>
    </Layout>
  )
}

export default Disclaimer;