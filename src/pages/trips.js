import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Trips from '../components/Trips'

const TripsPage = () => (
  <Layout>
    <SEO title="Trips" />
    <Trips  heading="Our Favourite Destinations"/>
  </Layout>
)

export default TripsPage;