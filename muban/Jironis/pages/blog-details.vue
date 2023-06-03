<template>
  <div>
    <NavTwo />
    <PageHeader title="Blog Details" />
    <BlogDetails />
    <Footer />
  </div>
</template>
<script>
  import NavTwo from "../components/NavTwo";
  import PageHeader from "../components/PageHeader";
  import BlogDetails from "../components/BlogDetails";
  import Footer from "../components/Footer";
  export default {
    components: {Footer, BlogDetails, PageHeader, NavTwo},
    head(){
      return {
        title: "Jironis | Blog Details"
      }
    }
  }
</script>
