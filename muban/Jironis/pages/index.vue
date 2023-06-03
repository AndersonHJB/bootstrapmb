<template>
  <div>
    <NavOne />
    <BannerOne />
    <Features />
    <Counter />
    <ServiceOne />
    <ServiceTwo />
    <Video />
    <Screenshots />
    <Pricing />
    <Testimonial />
    <ClientsLogo />
    <BlogHome />
    <DownloadApp />
    <Footer />
  </div>

</template>
<script>
  import NavOne from "../components/NavOne";
  import BannerOne from "../components/BannerOne";
  import Footer from "../components/Footer";
  import Features from "../components/Features";
  import Counter from "../components/Counter";
  import ServiceTwo from "../components/ServiceTwo";
  import ServiceOne from "../components/ServiceOne";
  import Video from "../components/Video";
  import Screenshots from "../components/Screenshots";
  import Pricing from "../components/Pricing";
  import Testimonial from "../components/Testimonial";
  import ClientsLogo from "../components/ClientsLogo";
  import BlogHome from "../components/BlogHome";
  import DownloadApp from "../components/DownloadApp";
  export default {
    components: {
      DownloadApp,
      BlogHome,
      ClientsLogo,
      Testimonial,
      Pricing,
      Screenshots,
      Video,
      ServiceOne,
      ServiceTwo,
      Counter,
      Features,
      Footer,
      BannerOne,
      NavOne
    }
  }
</script>
