import Navbar from "../components/navbar"
import Footer from "../containers/footer"
import ServicesHeader from "../containers/services-header"
import ServicesList from "../containers/services-list"

// DONE REVIEWING: Have been reviewed
export default function Services() {
  return (
    <>
      <Navbar />
      <ServicesHeader />
      <ServicesList />
      <Footer />
    </>
  )
}
