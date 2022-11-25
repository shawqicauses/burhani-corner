import Call from "../components/call"
import Navbar from "../components/navbar"
import Contact from "../containers/contact"
import Designs from "../containers/designs"
import Footer from "../containers/footer"
import Header from "../containers/header"
import WhatDoWeDo from "../containers/what-do-we-do"
import WhoAreWe from "../containers/who-are-we"
import WhyUs from "../containers/why-us"

// DONE REVIEWING: Have been reviewed
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Call />
      <Contact />
      <WhoAreWe />
      <Designs />
      <WhatDoWeDo />
      <WhyUs />
      <Footer />
    </>
  )
}
